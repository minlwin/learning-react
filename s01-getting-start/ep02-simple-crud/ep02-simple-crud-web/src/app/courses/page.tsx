'use client'

import { FormGroup } from "@/components/FormGroup"
import PageTitle from "@/components/PageTitle"
import { CourseSearch, Levels } from "@/model/index"
import { useActiveMenu } from "@/model/providers/ActiveMenuProvider"
import Link from "next/link"
import { useEffect } from "react"
import { useForm } from "react-hook-form"

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
    const onSubmit = async (data:CourseSearch) => console.log(data)

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
                <Link href={'/courses/0/edit'} type="button" className="btn">
                    Add New Course
                </Link>
            </div>
        </form>
    )
}

function ListView() {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Level</th>
                    <th>Fees</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Java Basic</td>
                    <td>Basic</td>
                    <td>300,000</td>
                    <td>Foundation Course for Java</td>
                </tr>
            </tbody>
        </table>    
    )
}