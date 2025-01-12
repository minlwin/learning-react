'use client'
import Link from "next/link";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import { BookOpen, Group, Home } from "lucide-react";
import { useActiveMenu } from "@/lib/providers/active-menu-provider";

export default function AppSidebar() {

    const {setMenu} = useActiveMenu()

    return (
        <Sidebar>
            <SidebarHeader>
                <h1 className="text-2xl p-2">Simple CRUD</h1>
            </SidebarHeader> 

            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {menus.map((menu, index) => 
                                <SidebarMenuItem key={index}>
                                    <SidebarMenuButton asChild>
                                        <Link onClick={() => setMenu(menu.name)} href={menu.url}>
                                            {menu.icon} {menu.name}
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            )}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

        </Sidebar>
    )
}

type MenuModel = {
    readonly name: string
    readonly url: string
    readonly icon: React.ReactNode
}

const menus:MenuModel[] = [
    {
        name: 'Home',
        url: '/',
        icon: <Home />
    },
    {
        name: 'Course Management',
        url: '/courses',
        icon: <BookOpen />
    },
    {
        name: 'Class Management',
        url: '/classes',
        icon: <Group />
    },
]