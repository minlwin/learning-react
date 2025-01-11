'use client'
import ListItem from "@/components/ListItem";
import Nodata from "@/components/Nodata";
import PageTitle from "@/components/PageTitle";
import { CourseDetails } from "@/model";
import { findCourse } from "@/model/clients/course-clients";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import { BiBookOpen, BiPencil } from "react-icons/bi";

export default function Page({params} : {params: Promise<{id:string}>}) {
    
    const {id} = use(params)
    const [course, setCourse] = useState<CourseDetails | undefined>()
    
    useEffect(() => {
        const loadData = async () => {
            const result = await findCourse(id)
            setCourse(result)
        }

        loadData()
    }, [id])

    return (
        <>
        <PageTitle title="Course Details" />
        <div className="pt-3">
        {course ? <WithData data={course} /> : <Nodata message="There is no course" /> }
        </div>
        </>
    )
}

function WithData({data} : {data:CourseDetails}) {
    return (
        <>
            {data.description && <p>{data.description}</p>}
            <div className="flex gap-8">
                <div className="w-1/4">
                    <BiBookOpen size={240} className="mb-4" />
                    <ListItem label="Course Name" value={data.name} />
                    <ListItem label="Course Level" value={data.level} />
                    <ListItem label="Fees" value={`${data.fees}`} />

                    <Link href={`/courses/${data.id}/edit`} className="inline-block">
                        <span className="btn flex items-center gap-2">
                            <BiPencil /> 
                            <span>Edit Course</span>
                        </span>
                    </Link>
                </div>
            </div>
        </>
    )
}