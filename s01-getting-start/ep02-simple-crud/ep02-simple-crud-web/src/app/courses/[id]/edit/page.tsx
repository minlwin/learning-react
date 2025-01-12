'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { courseFormSchema } from "@/lib/schemas/course-form-schema";
import { courseLevels } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Save } from "lucide-react";
import { use, useEffect } from "react";
import { useForm } from "react-hook-form";
import z from 'zod'

export default function Page({params} : {params: Promise<{id:number}>}) {
    
    const {id} = use(params)
    const form = useForm<z.infer<typeof courseFormSchema>>({
        resolver: zodResolver(courseFormSchema),
    })

    const save = async (form: z.infer<typeof courseFormSchema>) => {
        console.log(form)
    }

    useEffect(() => {
    }, [id])

    return (
        <Card>
            <CardHeader>
                <CardTitle>{id > 0 ? 'Edit Course' : 'Add New Course'}</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(save)}>
                        <div className="flex gap-4">
                            <FormField control={form.control} name="lavel" 
                                render={({field}) => (
                                    <FormItem className="w-1/3">
                                        <FormLabel>Course Level</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select One" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {courseLevels.map(item => (
                                                    <SelectItem key={item} value={item}>{item}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )} />

                            <FormField control={form.control} name="name" 
                                render={({field}) => (
                                    <FormItem className="w-1/3">
                                        <FormLabel>Course Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter Course Name" {...field}/>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />

                            <FormField control={form.control} name="fees" 
                                render={({field}) => (
                                    <FormItem className="w-1/3">
                                        <FormLabel>Course Fees</FormLabel>
                                        <FormControl>
                                            <Input type="number" {...field}/>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                        </div>
                        
                        <div className="my-4">
                            <FormField control={form.control} name="description" 
                                render={({field}) => (
                                    <FormItem className="w-full">
                                        <FormLabel>Description</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="Description for course" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                        </div>

                        <Button type="submit">
                            <Save /> Save Course
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}