'use client'

import React, { createContext, useContext, useEffect, useState } from "react"
import { MenuItemModel } from "../components/side-menu"
import { KEY_PREFIX } from "./utils"

const KEY = `${KEY_PREFIX}.selected-menu`

type SelectedMenuContextType = {
    menu:MenuItemModel
    setMenu:(menu:MenuItemModel) => void
}

const SelectedMenuContext = createContext<SelectedMenuContextType | undefined>(undefined)

export function SelectedMenuProvider({children} : {children: React.ReactNode}) {

    const [menu, setMenu] = useState<MenuItemModel>({
        name : 'Home',
        icon: "Home",
        route: '/'
    })

    useEffect(() => {
        const value = localStorage.getItem(KEY)
        if(value) {
            setMenu(JSON.parse(value))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(menu))
    }, [menu])

    return (
        <SelectedMenuContext.Provider value={{menu : menu, setMenu : setMenu}}>
            {children}
        </SelectedMenuContext.Provider>
    )
}

function SelectedMenu() {
    const context = useContext(SelectedMenuContext) 

    if(context === undefined) {
        throw new Error('Invalid usage of Menu Context')
    }

    return context
}

export function useSelectedMenu() {
    return SelectedMenu().menu
}

export function useSetSelectedMenu() {
    return SelectedMenu().setMenu
}