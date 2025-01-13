'use client'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Search } from "lucide-react"
import { CourseResultProvider, useCourseResult } from "@/lib/providers/course-result-provider"
import { courseLevels } from "@/lib/types"
import { useCourseSearch } from "@/hooks/client/course-clients"
import { CourseSearch, courseSearchSchema } from "@/lib/schemas/course-search-schema"
import Link from "next/link"
import { useEffect } from "react"
import AppFormSelect from "@/components/app/app-form-select"
import AppFormInput from "@/components/app/app-form-input"
import AppTableView, { AppTableModel } from "@/components/app/app-table-view"

export default function Page() {
    return (
        <section>
            <CourseResultProvider>
                <Card className="px-4 py-2">
                    <SearchForm />
                </Card>

                <div className="mt-4">
                    <ResultTable />
                </div>
            </CourseResultProvider>
        </section>
    )
}

function SearchForm() {
    const form = useForm<CourseSearch>({
        resolver: zodResolver(courseSearchSchema),
    })

    const {setList} = useCourseResult()

    const search = async (value:CourseSearch) => {
        if(value.level == "all") {
            value.level = undefined
        }
        const result = await useCourseSearch(value)
        setList(result)
    }

    useEffect(() => {
        const load = async() => await search(form.getValues())
        load()
    }, [form])

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(search)} className="flex gap-4 py-4">

                <AppFormSelect control={form.control} name="level" lable="Level"
                    placeholder="Select Level" items={courseLevels} className="w-40" />
                
                <AppFormInput control={form.control} name="keyword" label="Keyword" 
                    placeholder="Search Keyword" className="w-80" />

                <div className="pt-8">
                    <Button type="submit" className="me-2"><Search/> Search</Button> 
                    <Button asChild variant={"destructive"}>
                        <Link href="/courses/0/edit">
                            <Plus /> Create Course
                        </Link>
                    </Button>
                </div>
            </form>
        </Form>
    )
}

function ResultTable() {
    const {list} = useCourseResult()

    useEffect(() => {
        console.log(list)
    }, [list])
    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>Search Result</CardTitle>
                </CardHeader>
                <CardContent>
                    {list.length == 0 ? "There is no course information." : 
                        <AppTableView model={getTableModel(list)} />
                    }
                </CardContent>
            </Card> 
        </>
    )
}

function getTableModel(dataSet:{[key:string]:any}[]):AppTableModel {
    return {
        columns: [
            {fieldName: 'id', header: "ID", type: 'Value'},
            {fieldName: 'name', header: "Name", type: 'Value'},
            {fieldName: 'level', header: "Level", type: 'Value'},
            {fieldName: 'fees', header: "Fees", type: 'Value', className: 'text-end'},
            {fieldName: 'id', header: '', type: {
                detailsUrl : (id) => `/courses/${id}/details`
            }}
        ],
        rows: dataSet
    }
}