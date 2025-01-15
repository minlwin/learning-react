'use client'
import { AppFormChecks } from "@/components/app/app-form-checks";
import AppFormInput from "@/components/app/app-form-input";
import AppFormSelect from "@/components/app/app-form-select";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useCourseSearch } from "@/hooks/client/course-clients";
import { useSectionCreate, useSectionUpdate } from "@/hooks/client/section-clients";
import { useCourseResult } from "@/lib/providers/course-result-provider";
import { SectionForm, sectionFormSchema } from "@/lib/schemas/section-form-schema";
import { classTypes } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Save } from "lucide-react";
import { useRouter } from "next/navigation";
import { use, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";

export default function Page({params}: {params: Promise<{id:number}>}) {

    const {list, setList} = useCourseResult()
    const courses = useMemo(() => list.map(data => {
        const {id, name} = data
        return {value : `${id}`, label : name}
    }), [list])
    const {id} = use(params)
    const router = useRouter()

    useEffect(() => {
        const loadCourses = async() => {
            const courses = await useCourseSearch({})
            setList(courses)
        }

        loadCourses()

        if(id > 0) {
            
        }
    }, [id])

    const form = useForm<SectionForm>({
        resolver: zodResolver(sectionFormSchema),
        defaultValues: {
            months: '',
            fees: '',
            startAt: '',
            startTime: '',
            endTime: '',
            days: []
        }
    })

    const save = async (formData : SectionForm) => {
        const result = (id > 0) ? 
            await useSectionUpdate(id, formData) : 
            await useSectionCreate(formData)
        
        if(result) {
            router.push(`/classes/${result.id}/details`)
        }
    } 

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(save)} className="w-full grid grid-cols-4 gap-4">
                <AppFormSelect className="col-span-2" control={form.control} label="Course Name" name="courseId" items={courses} placeholder="Select Course"  />
                <AppFormSelect className="col-start-1" control={form.control} label="Class Type" name="type" items={classTypes} placeholder="Select class type"  />
                <AppFormInput control={form.control} label="Duration" name="months" type="number" placeholder="Duration in Months" />
                <AppFormInput control={form.control} label="Fees" name="fees" type="number" placeholder="Course Fees" />
                <AppFormInput className="col-start-1" control={form.control} label="Start Date" name="startAt" type="date"  />
                <AppFormInput control={form.control} label="Start Time" name="startTime" type="time"  />
                <AppFormInput control={form.control} label="Start Time" name="endTime" type="time"  />
                <div></div>
                <AppFormChecks control={form.control} label="Days" name="days" items={DAYS} />
                <Button className="col-start-1 mt-4" type="submit">
                    <Save /> Save Class
                </Button>
            </form>
        </Form>
    )
}

const DAYS : {value : any, label : string}[] = [
    {value : 'MONDAY', label : 'Monday'},
    {value : 'TUESDAY', label : 'Tuesday'},
    {value : 'WEDNESDAY', label : 'Wendesday'},
    {value : 'THURSDAY', label : 'Thursday'},
    {value : 'FRIDAY', label : 'Friday'},
    {value : 'SATURDAY', label : 'Saturday'},
    {value : 'SUNDAY', label : 'Sunday'}
]