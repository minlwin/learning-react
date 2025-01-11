'use client'

import { FormGroup } from "@/components/FormGroup"
import Nodata from "@/components/Nodata"
import PageTitle from "@/components/PageTitle"
import { searchCourse } from "@/model/clients/course-clients"
import { CourseInfo, CourseSearch, Levels } from "@/model/index"
import { useActiveMenu } from "@/model/providers/ActiveMenuProvider"
import CoursesProvider, { useCourses } from "@/model/providers/CoursesProvider"
import Link from "next/link"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { BiSend } from "react-icons/bi"

export default function Page() {

    const {setActiveMenu} = useActiveMenu()
    useEffect(() => setActiveMenu('course'), [])

    return (
        <>
            <PageTitle title="Course Management" />
            <SearchForm />
            <ListView />
        </>
    )
}

function SearchForm() {
    const {register, handleSubmit} = useForm<CourseSearch>()
    const {setCourses} = useCourses()

    const onSubmit = async (data:CourseSearch) => {
        const result = await searchCourse(data)
        setCourses(result)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="search-form">
            <FormGroup label="Course Level" className="me-4">
                <select {...register('level')}>
                    <option value="">Select One</option>
                    {Levels.map(item => <option key={item} value={item}>{item}</option>)}
                </select>
            </FormGroup> 

            <FormGroup label="Keyword" className="me-4">
                <input {...register('keyword')} type="text" placeholder="Search Keyword" />
            </FormGroup>

            <div className="btn-wrapper">
                <button type="submit" className="btn">
                    Search
                </button>
                <Link href={{pathname: '/courses/0/edit'}} type="button" className="btn">
                    Add New Course
                </Link>
            </div>
        </form>
    )
}

function ListView() {

    const {courses} = useCourses()

    return (
        <>
        {courses ? 
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Level</th>
                        <th>Fees</th>
                        <th>Description</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {courses && courses.map(course => <Row key={course.id} data={course} />) }
                </tbody>
            </table>  
            : <Nodata message="There is no courses" />            
        }
        </>
    )
}

function Row({data}: {data: CourseInfo}) {
    return (
        <tr>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.level}</td>
            <td>{data.fees}</td>
            <td>{data.description}</td>
            <td className="w-10">
                <Link href={`/courses/${data.id}/details`}>
                    <BiSend />
                </Link>
            </td>
        </tr>        
    )    
}