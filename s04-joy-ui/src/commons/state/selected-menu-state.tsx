'use client'

import React, { createContext, useContext, useState } from "react"

export type MenuModel = {
    title: string,
    icon: React.ReactNode,
    link: string
}

type SelectedMenuContextType = {
    menu?: MenuModel,
    setMenu: (menu:MenuModel) => void
}

const SelectedMenuContext = createContext<SelectedMenuContextType | undefined>(undefined)

function SelectedMenuStateProvider({children} : {children: React.ReactNode}) {
    const [menu, setMenu] = useState<MenuModel | undefined>()
    return (
        <SelectedMenuContext.Provider value={{menu: menu, setMenu: setMenu}}>
            {children}
        </SelectedMenuContext.Provider>
    )
}

function useSelectedMenuState() {
    const context = useContext(SelectedMenuContext)

    if(context === undefined) {
        throw new Error('Invalid context usage of Selected Menu State.')
    }

    return context;
}

function useSelectedMenu() {
    return useSelectedMenuState().menu
}

function useSetSelectedMenu() {
    return useSelectedMenuState().setMenu
}

export {
    SelectedMenuStateProvider,
    useSelectedMenu,
    useSetSelectedMenu
}