'use client'
import z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ChevronRight, Plus, Search } from "lucide-react"
import { CourseResultProvider, useCourseResult } from "@/lib/providers/course-result-provider"
import { courseLevels } from "@/lib/types"
import { useCourseSearch } from "@/hooks/client/course-clients"
import { courseSearchSchema } from "@/lib/schemas/course-search-schema"
import Link from "next/link"
import { useEffect } from "react"

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
        
        if(value.level == "all") {
            value.level = undefined
        }
        
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
                                        <SelectValue placeholder="All Levels" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="all">All Levels</SelectItem>
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
		                <Table>
		                    <TableHeader>
		                        <TableRow>
		                            <TableHead>ID</TableHead>
		                            <TableHead>Course</TableHead>
		                            <TableHead>Level</TableHead>
		                            <TableHead>Fees</TableHead>
		                            <TableHead>Description</TableHead>
		                            <TableHead></TableHead>
		                        </TableRow>
		                    </TableHeader>
		                    <TableBody>
		                        {list.map(data => (
		                            <TableRow key={data.id}>
		                                <TableCell>{data.id}</TableCell>
		                                <TableCell>{data.name}</TableCell>
		                                <TableCell>{data.level}</TableCell>
		                                <TableCell>{data.fees}</TableCell>
		                                <TableCell>{data.description}</TableCell>
		                                <TableCell>
		                                    <Link href={`/courses/${data.id}/details`}>
		                                        <ChevronRight size={16} />
		                                    </Link>
		                                </TableCell>
		                            </TableRow>
		                        ))}
		                    </TableBody>
		                </Table>
                    }
                </CardContent>
            </Card> 
        </>
    )
}