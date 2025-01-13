'use client'
import AppFormInput from "@/components/app/app-form-input";
import AppFormSelect from "@/components/app/app-form-select";
import AppFormTextarea from "@/components/app/app-form-textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCourseCreate, useCourseForEdit, useCourseUpdate } from "@/hooks/client/course-clients";
import { courseFormSchema } from "@/lib/schemas/course-form-schema";
import { courseLevels } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { BookOpen, Save } from "lucide-react";
import { useRouter } from "next/navigation";
import { use, useEffect } from "react";
import { useForm } from "react-hook-form";
import z from 'zod'

export default function Page({params} : {params: Promise<{id:number}>}) {
    
    const {id} = use(params)
    const router = useRouter()

    const form = useForm<z.infer<typeof courseFormSchema>>({
        resolver: zodResolver(courseFormSchema),
        defaultValues: {
            level: 'Basic',
            name: '',
            fees: '',
            description: ''
        }
    })

    const save = async (data: z.infer<typeof courseFormSchema>) => {
        console.log(data)
        const result = (id == 0) ? await useCourseCreate(data) : 
            await useCourseUpdate(id, data)
        router.replace(`/courses/${result.id}/details`)
    }

    useEffect(() => {
        const load = async () => {
            const {name, level, fees, description} = await useCourseForEdit(id)
            form.setValue('name', name)
            form.setValue('level', level)
            form.setValue('fees', `${fees}`)
            form.setValue('description', description)
        }

        if(id > 0) {
            load()
        }
    }, [id, form])

    return (
        <Card>
            <CardHeader>
                <CardTitle>{id > 0 ? 'Edit Course' : 'Add New Course'}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex gap-8">
                    <div>
                        <BookOpen size={240} />
                    </div>
                    <div className="w-full">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(save)}>
                                <div className="flex gap-4">
                                    <AppFormSelect<z.infer<typeof courseFormSchema>>
                                        lable="Course Level"
                                        items={courseLevels}
                                        control={form.control}
                                        name="level"
                                        className="w-1/3"
                                        placeholder="Select Course Level" />

                                    <AppFormInput 
                                        control={form.control} name="name" label="Course Name" 
                                        className="w-1/3" placeholder="Enter Course Name" />


                                    <AppFormInput control={form.control} name="fees" 
                                        label="Fees" type="number" className="w-1/3" placeholder="Enter Course Fees" />    
                               
                                </div>
                                
                                <div className="my-4">
                                    <AppFormTextarea control={form.control} name="description" label="Description"
                                        placeholder="Enter Course Description"  />
                                </div>

                                <Button type="submit">
                                    <Save /> Save Course
                                </Button>
                            </form>
                        </Form>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}