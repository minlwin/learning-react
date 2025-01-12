'use client'
import { useActiveMenu } from "@/lib/providers/active-menu-provider";
import { SidebarTrigger } from "../ui/sidebar";
import { useEffect } from "react";

export default function AppTitle() {

    const {menu} = useActiveMenu()
    useEffect(() => {
        document.title = `CRUD | ${menu.toUpperCase()}`
    }, [menu])
    return (
        <nav className="flex items-center gap-1">
            <SidebarTrigger />
            {menu}
        </nav>
    )
}