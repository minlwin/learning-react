'use client'

import { FormGroup } from "@/components/FormGroup"
import PageTitle from "@/components/PageTitle"
import { Levels, SectionSearch, SectionTypes } from "@/model"
import { useActiveMenu } from "@/model/providers/ActiveMenuProvider"
import Link from "next/link"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { BiSend } from "react-icons/bi"

export default function Page() {

    const {setActiveMenu} = useActiveMenu()
    useEffect(() => setActiveMenu('section'), [])

    return (
        <>
            <PageTitle title="Section Management" />
            <SearchForm />
            <ListView />
        </>
    )
}

function SearchForm() {
    
    const {register, handleSubmit} = useForm<SectionSearch>()
    const onSubmit = (data:SectionSearch) => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="search-form">
            <FormGroup label="Type" className="me-4">
                <select {...register('type')}>
                    <option value="">All Types</option>
                    {SectionTypes.map(item => <option key={item} value={item}>{item}</option>)}
                </select>
            </FormGroup>

            <FormGroup label="Level" className="me-4">
                <select {...register('level')}>
                    <option value="">All Levels</option>
                    {Levels.map(item => <option key={item} value={item}>{item}</option>)}
                </select>
            </FormGroup>

            <FormGroup label="Start From" className="me-4">
                <input {...register('startFrom')} type="date" />
            </FormGroup>

            <FormGroup label="Start To" className="me-4">
                <input {...register('startTo')} type="date" />
            </FormGroup>

            <FormGroup label="Keyword" className="me-4">
                <input {...register('keyword')} type="text" placeholder="Search Keyword" />
            </FormGroup>

            <div className="btn-wrapper">
                <button type="submit" className="btn">
                    Search
                </button>
                <Link href={'/sections/0/edit'} type="button" className="btn">
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
                    <th>Course</th>
                    <th>Level</th>
                    <th>Start Date</th>
                    <th>Type</th>
                    <th>Months</th>
                    <th>Fees</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Java Basic</td>
                    <td>Basic</td>
                    <td>2025-01-18</td>
                    <td>Campus</td>
                    <td>3 Months</td>
                    <td>300,000 MMK</td>
                    <td className="w-10">
                        <Link href={`/sections/1/details`}>
                            <BiSend />
                        </Link>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}