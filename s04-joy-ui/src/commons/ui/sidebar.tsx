'use client'

import { AutoStories, EmailOutlined, Event, Lock, People, PeopleOutline, PersonOutline, Settings, ShoppingCart } from "@mui/icons-material"
import { List, ListDivider, ListItem, ListItemButton, ListItemContent, ListItemDecorator } from "@mui/joy"
import React from "react"
import { MenuModel, useSetSelectedMenu } from "../state/selected-menu-state"
import { useRouter } from "next/navigation"
import { useDrawerStateSetter } from "../state/drawer-state"

export default function SideBar() {

    const router = useRouter()
    const setSelectedMenu = useSetSelectedMenu()
    const setDrawerState = useDrawerStateSetter()

    const navigate = (menu:MenuModel) => {
        setSelectedMenu(menu)
        router.push(menu.link)
        setDrawerState(false)
    }

    return (
        <>
            <div className="pt-8 py-4 px-12">
                <img src="/images/jdc-logo.png" />
            </div>

            <List>
                {ManagementMenus.map((menu, index) => 
                    <ListItem key={`management-${index}`}>
                        <ListItemButton onClick={() => navigate(menu)}>
                            <ListItemDecorator>{menu.icon}</ListItemDecorator>
                            <ListItemContent>{menu.title}</ListItemContent>
                        </ListItemButton>
                    </ListItem>
                )}
                <ListDivider />
                {PersonalMenus.map((menu, index) => 
                    <ListItem key={`management-${index}`}>
                        <ListItemButton onClick={() => navigate(menu)}>
                            <ListItemDecorator>{menu.icon}</ListItemDecorator>
                            <ListItemContent>{menu.title}</ListItemContent>
                        </ListItemButton>
                    </ListItem>
                )}
            </List>
        </>
    )
}

const ManagementMenus:MenuModel[] = [
    {
        title : 'Courses',
        icon: <AutoStories/>,
        link: '/management/courses'
    },
    {
        title : 'Classes',
        icon: <Event />,
        link: '/management/classes'
    },
    {
        title : 'Payments',
        icon: <ShoppingCart />,
        link: '/management/payments'
    },
    {
        title : 'Students',
        icon: <People />,
        link: '/management/students'
    },
    {
        title : 'Employees',
        icon: <PeopleOutline />,
        link: '/management/employees'
    },
    {
        title : 'Messages',
        icon: <EmailOutlined />,
        link: '/management/messages'
    },
]

const PersonalMenus:MenuModel[] = [
    {
        title : 'Profile',
        icon: <PersonOutline />,
        link: '/personal/profile'
    },
    {
        title : 'Change Password',
        icon: <Lock />,
        link: '/personal/change-pass'
    },
    {
        title : 'Settings',
        icon: <Settings />,
        link: '/personal/settings'
    },
]