'use client'

import * as MuiIcons from '@mui/icons-material';
import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import { useSetSelectedMenu } from "../context/selected-menu-context";

export default function SideMenu({onSelect}: {onSelect: VoidFunction}) {

    const router = useRouter()
    const setMenu = useSetSelectedMenu()
    
    const navigate = (menu:MenuItemModel) => {
        setMenu(menu)
        router.push(menu.route)
        onSelect()
    }

    return (
        <Box width={280}>
            <div className="mt-8 mb-4 mx-12">
                <img src="/images/jdc-logo.png" className="w-1/1" />
            </div>

            <List dense={true}>
                <ListItem>
                    <ListItemButton>Management</ListItemButton>
                </ListItem>
                {ManagementMenu.map((menu, index) => (
                    <ListItem key={index} >
                        <ListItemButton onClick={() => navigate(menu)}>
                            <ListItemIcon>
                                {icon(menu.icon)}
                            </ListItemIcon>
                            <ListItemText>{menu.name}</ListItemText>
                        </ListItemButton>
                    </ListItem>              
                ))}
            </List>
            <Divider/>

            <List dense={true}>
                <ListItem>
                    <ListItemButton>Settings</ListItemButton>
                </ListItem>
                {SettingMenu.map((menu, index) => (
                    <ListItem key={index} >
                        <ListItemButton onClick={() => navigate(menu)}>
                            <ListItemIcon>
                                {icon(menu.icon)}
                            </ListItemIcon>
                            <ListItemText>{menu.name}</ListItemText>
                        </ListItemButton>
                    </ListItem>              
                ))}
            </List>
            <Divider/>

            <List dense={true}>
                {PersonalMenu.map((menu, index) => (
                    <ListItem key={index} >
                        <ListItemButton onClick={() => navigate(menu)}>
                            <ListItemIcon>
                                {icon(menu.icon)}
                            </ListItemIcon>
                            <ListItemText>{menu.name}</ListItemText>
                        </ListItemButton>
                    </ListItem>              
                ))}
            </List>

        </Box>
    )
}

export const icon = (name:string) => {
    const MuiIcon = (MuiIcons as any)[name]

    if(MuiIcon) {
        return <MuiIcon />
    }

    return null
}


export type MenuItemModel = {
    name: string,
    icon: string,
    route: string,
}

const ManagementMenu:MenuItemModel[] = [
    {
        name: "Course Management",
        icon: "BookTwoTone",
        route: '/management/course'
    },
    {
        name: "Class Management",
        icon: "CalendarMonth",
        route: '/management/class'
    },
    {
        name: "Payment History",
        icon: "ShoppingCart",
        route: '/management/payment'
    },
    {
        name: "Employee Management",
        icon: "PeopleOutline",
        route: '/management/employee'
    },
    {
        name: "Student Management",
        icon: "PeopleAlt",
        route: '/management/student'
    },
]

const SettingMenu:MenuItemModel[] = [
    {
        name: "Payment Methods",
        icon: "Payment",
        route: '/setting/payment-methods'
    },
    {
        name: "General Settings",
        icon: "Settings",
        route: '/setting/general'
    },
]

const PersonalMenu:MenuItemModel[] = [
    {
        name: "Messages",
        icon: "Email",
        route: '/personal/messages'
    },
    {
        name: "Change Password",
        icon: "Key",
        route: '/personal/change-pass'
    },
    {
        name: "Profile",
        icon: "PersonOutline",
        route: '/personal/profile'
    },
]
