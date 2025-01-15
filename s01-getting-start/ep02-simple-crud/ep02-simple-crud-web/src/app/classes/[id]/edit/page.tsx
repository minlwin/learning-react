import { useCourseSearch, useCourseUpdate } from "@/hooks/client/course-clients";
import { useSectionCreate, useSectionUpdate } from "@/hooks/client/section-clients";
import { useCourseResult } from "@/lib/providers/course-result-provider";
import { SectionForm, sectionFormSchema } from "@/lib/schemas/section-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { use, useEffect } from "react";
import { Form, useForm } from "react-hook-form";

export function Page({params}: {params: Promise<{id:number}>}) {

    const {list, setList} = useCourseResult()
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
            <form onSubmit={form.handleSubmit(save)}>
                
            </form>
        </Form>
    )
}

