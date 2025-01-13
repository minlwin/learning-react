'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCourseDetails } from "@/hooks/client/course-clients";
import { CourseDetails } from "@/lib/types";
import { BookOpen, Pencil } from "lucide-react";
import Link from "next/link";
import { use, useEffect, useState } from "react";

export default function Page({params} : {params: Promise<{id:number}>}) {
    const {id} = use(params)
    const [data, setData] = useState<CourseDetails | undefined>(undefined)

    useEffect(() => {
        const load = async () => {
            const result = await useCourseDetails(id)
            setData(result)
        }

        load()
    }, [id])

    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>Course Details</CardTitle>
                </CardHeader>

                <CardContent>
                    {data ? (
                        <div className="flex gap-8">
                            <div>
                                <BookOpen size={240} />
                            </div>

                            <div className="flex flex-col items-start gap-4">
                                <Information label="Course Name" value={data.name} />
                                <Information label="Course Level" value={data.level} />
                                <Information label="Fees" value={`${data.fees.toLocaleString()} MMK`} />
                                {data.description && 
                                    <Information label="Description" value={data.description} />
                                }

                                <Button asChild>
                                    <Link href={`/courses/${data.id}/edit`}>
                                        <Pencil /> Edit Course
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <p>Loading ...</p>
                    )}
                </CardContent>
            </Card>

            {data?.sections && (
                <div></div>
            )}
        </>
    )
}

function Information({label, value}: {label:string, value:string}) {
    return (
        <div>
        <span className="block text-sm text-gray-400">{label}</span>
        <span className="block text-lg">{value}</span>
    </div>
    )
}