'use client'

import { createContext, useContext, useState } from "react"

export function ActiveMenuProvider({children}:{children:React.ReactNode}) {

    const [activeMenu, setActiveMenu] = useState<string | undefined>()

    return (
        <ActiveMenuContext.Provider value={{activeMenu, setActiveMenu}}>
        {children}
        </ActiveMenuContext.Provider>
    )
}

export interface ActiveMenuContextType {
    activeMenu?:string
    setActiveMenu(activeMenu?:string):void
}

export const ActiveMenuContext = createContext<ActiveMenuContextType | undefined>(undefined)

export const useActiveMenu = () => {
    const context = useContext(ActiveMenuContext)

    if(!context) {
        throw new Error("Invalid context for Active Menu")
    }

    return context
}