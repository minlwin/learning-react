'use client'

import { useActiveMenu } from "@/model/providers/ActiveMenuProvider"
import { useEffect } from "react"

export default function SectionList() {

    const {setActiveMenu} = useActiveMenu()

    useEffect(() => setActiveMenu('section'), [])

    return (
        <h1>Section Management</h1>
    )
}