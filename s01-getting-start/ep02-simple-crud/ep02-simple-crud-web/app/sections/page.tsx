"use client"

import PageTitle from "@/utils/components/PageTitle"
import { useActiveMenu } from "@/utils/providers/NavStateProvider"
import { useEffect } from "react"
import { BiCalendar } from "react-icons/bi"

export default function SectionManagement() {

    const {setActiveMenu} = useActiveMenu()
    useEffect(() => setActiveMenu('section'), [])

    return <>
            <PageTitle>
                <BiCalendar className="me-2" /> Course Management
            </PageTitle>
            
            
        </>
}