'use client'

import { useActiveMenu } from "@/model/providers/ActiveMenuProvider"
import { useEffect } from "react"

export default function CourseList() {

    const {setActiveMenu} = useActiveMenu()

    useEffect(() => setActiveMenu('course'), [])

    return (
        <h1>Course Management</h1>
    )
}