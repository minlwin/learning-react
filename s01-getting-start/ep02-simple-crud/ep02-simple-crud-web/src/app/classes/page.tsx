'use client'

import AppFormInput from "@/components/app/app-form-input"
import AppFormSelect from "@/components/app/app-form-select"
import AppTableView, { AppTableColumn } from "@/components/app/app-table-view"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Form } from "@/components/ui/form"
import { useSectionSearch } from "@/hooks/client/section-clients"
import { SectionListProvider, useSectionList } from "@/lib/providers/section-result-provider"
import { SectionSearch, sectionSearchSchema } from "@/lib/schemas/section-search-schema"
import { courseLevels, classTypes } from "@/lib/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { Plus, Search } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"
import { useForm } from "react-hook-form"

export default function Page() {
    return (
        <SectionListProvider>
            <section>
                <SearchForm />
                <ResultTable />
            </section>
        </SectionListProvider>
    )
}

function SearchForm() {
    
    const {setList} = useSectionList()
    const form = useForm<SectionSearch>({
        resolver: zodResolver(sectionSearchSchema),
    })

    const search = async (value:SectionSearch) => {
        const result = await useSectionSearch(value)
        setList(result)
    }

    useEffect(() => {
        const load = async () => {
            await search(form.getValues())
        }
        load()
    }, [form])

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(search)} className="flex gap-4 py-4">
                <AppFormSelect control={form.control} name="level" label="Level" placeholder="Select Level" items={courseLevels} className="w-40" />
                <AppFormSelect control={form.control} name="type" label="Class Type" placeholder="Select Type" items={classTypes} className="w-40" />
                <AppFormInput control={form.control} name="startFrom" label="Start From" placeholder="Start From" type="date" className="w-40" />  
                <AppFormInput control={form.control} name="startTo" label="Start To" placeholder="Start To" type="date" className="w-40" />
                <AppFormInput control={form.control} name="keyword" label="Keyword" placeholder="Search Keyword" className="w-120" /> 

                <div className="pt-8">
                    <Button type="submit" className="me-2"><Search/> Search</Button> 
                    <Button asChild variant={"destructive"}>
                        <Link href="/sections/0/edit" >
                            <Plus /> Create
                        </Link>
                    </Button>
                </div>
            </form>
        </Form>    
    )
}

function ResultTable() {
    const {list} = useSectionList()
    return (
        <Card>
            <CardHeader>
                <CardTitle>Search Result</CardTitle>
            </CardHeader>
            <CardContent>
                {list.length == 0 ? "There is no class. Please change filter or create classes." : (
                    <AppTableView columns={COLUMNS} rows={list} />
                )}
            </CardContent>
        </Card>
    )
}

const COLUMNS : AppTableColumn[] = [
    { fieldName: 'id', header: 'Id', type: "Value" },
    { fieldName: 'type', header: 'Type', type: "Value" },
    { fieldName: 'courseName', header: 'Course', type: "Value" },
    { fieldName: 'courseLevel', header: 'Level', type: "Value" },
    { fieldName: 'startAt', header: 'Start Date', type: "Value" },
    { fieldName: 'months', header: 'Months', type: "Value" },
    { fieldName: 'fees', header: 'Fees', type: "Value" },
    { fieldName: 'id', header: '', type: {
        detailsUrl: (id) => `/classes/${id}/details`
    }},
]