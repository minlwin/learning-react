'use client'
import PageTitle from "@/components/page-title"
import { useActiveMenu } from "@/states/active-menu-state"

export default function Page() {

   const setActiveMenu = useActiveMenu(state => state.setActiveMenu)
   setActiveMenu('context')

    return (
        <>
            <PageTitle title="Use Context Demo" />
        </>
    )
}