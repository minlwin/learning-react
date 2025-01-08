"use client"

import PageTitle from "@/utils/components/PageTitle"
import { useActiveMenu } from "@/utils/providers/NavStateProvider"
import { useEffect } from "react"
import { BiBookOpen } from "react-icons/bi"

export default function CourseManagement() {

    const {setActiveMenu} = useActiveMenu()
    useEffect(() => setActiveMenu('course'), [])

    return <>
        <PageTitle>
            <BiBookOpen className="me-2" /> Course Management

            {/* Search Form */}

            {/* List View */}
        </PageTitle>
    </>
}