'use client'

import { FormGroup } from "@/components/FormGroup"
import PageTitle from "@/components/PageTitle"
import { useActiveMenu } from "@/model/providers/ActiveMenuProvider"
import Link from "next/link"
import { useEffect } from "react"

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
    return (
        <form className="search-form">
            <FormGroup label="Type" className="me-4">
                <select >
                    <option value="">All Types</option>
                </select>
            </FormGroup>

            <FormGroup label="Level" className="me-4">
                <select >
                    <option value="">All Levels</option>
                </select>
            </FormGroup>

            <FormGroup label="Start From" className="me-4">
                <input type="date" />
            </FormGroup>

            <FormGroup label="Start To" className="me-4">
                <input type="date" />
            </FormGroup>

            <FormGroup label="Keyword" className="me-4">
                <input type="text" placeholder="Search Keyword" />
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
                </tr>
            </tbody>
        </table>
    )
}