'use client'

import React, { createContext, useContext, useState } from "react"
import { MenuItemModel } from "../components/side-menu"
import { Home } from "@mui/icons-material"

type SelectedMenuContextType = {
    menu:MenuItemModel
    setMenu:(menu:MenuItemModel) => void
}

const SelectedMenuContext = createContext<SelectedMenuContextType | undefined>(undefined)

export function SelectedMenuProvider({children} : {children: React.ReactNode}) {

    const [menu, setMenu] = useState<MenuItemModel>({
        name : '',
        icon: <Home />,
        route: '/'
    })

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