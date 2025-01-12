'use client'
import { useForm } from "react-hook-form"
import z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Plus, Search } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { courseLevels } from "@/lib/types"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { CourseResultProvider, useCourseResult } from "@/lib/providers/course-result-provider"
import { useCourseSearch } from "@/hooks/client/course-clients"
import { Table } from "@/components/ui/table"
import { courseSearchSchema } from "@/lib/schemas/course-search-schema"

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
    const form = useForm<z.infer<typeof courseSearchSchema>>({
        resolver: zodResolver(courseSearchSchema),
    })

    const {setList} = useCourseResult()

    const search = async (value:z.infer<typeof courseSearchSchema>) => {
        const result = await useCourseSearch(value)
        setList(result)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(search)} className="flex gap-4 py-4">
                
                <FormField control={form.control} name="level"
                    render={({field}) => (
                        <FormItem className="w-40">
                            <FormLabel>Course Level</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Search Level" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {courseLevels.map(item => (
                                        <SelectItem key={item} value={item}>{item}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </FormItem>
                    )} />
                
                <FormField control={form.control} name="keyword" 
                    render={({field}) => (
                        <FormItem className="w-80">
                            <FormLabel>Keyword</FormLabel>
                            <FormControl>
                                <Input placeholder="Search Keyword" {...field}/>
                            </FormControl>
                        </FormItem>
                    )}
                />

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
    return (
        <>
            {   
                list.length == 0 ? 
                <Card>
                    <CardHeader>
                        <CardTitle>Search Result</CardTitle>
                    </CardHeader>
                    <CardContent>
                        There is no course information.
                    </CardContent>
                </Card> : 

                <Table></Table>
            }
        </>
    )
}