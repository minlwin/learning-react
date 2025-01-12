'use client'
import { createContext, useContext, useEffect, useState } from "react"
import { Children } from "../types"

const STORED_MENU_KEY = 'com.jdc.react.crud.menu'

type ActiveMenuModel = {
    menu:string
    setMenu(menu:string):void
}

const ActiveMenuContext = createContext<ActiveMenuModel | undefined>(undefined)

const useActiveMenu = () => {
    const context = useContext(ActiveMenuContext)
    if(!context) {
        throw new Error("Invalid usage of Active Menu Context")
    }
    return context
}

function ActiveMenuProvider({children}:Children) {
    const [menu, setMenu] = useState<string>("Home")

    useEffect(() => {
        const storedMenu = localStorage.getItem(STORED_MENU_KEY)
        if(storedMenu) {
            setMenu(storedMenu)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(STORED_MENU_KEY, menu)
    }, [menu])

    return (
        <ActiveMenuContext.Provider value={{menu, setMenu}}>
            {children}
        </ActiveMenuContext.Provider>
    )
}

export {ActiveMenuProvider, useActiveMenu}