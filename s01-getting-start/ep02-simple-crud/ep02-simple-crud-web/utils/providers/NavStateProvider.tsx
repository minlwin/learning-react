"use client"

import React, { createContext, useContext, useState } from "react";

export function NavStateProvider({children} : Readonly<{children: React.ReactNode}>) {
    const [activeMenu, setActiveMenu] = useState<string | undefined>(undefined)
    return (
        <NavStateContext.Provider value={{activeMenu, setActiveMenu}}>
            {children}
        </NavStateContext.Provider>
    )
}

interface NavStateContextType {
    activeMenu: string | undefined
    setActiveMenu: (activeMenu:string | undefined) => void   
}

const NavStateContext = createContext<NavStateContextType | undefined>(undefined)

export const useActiveMenu = () => {
    const context = useContext(NavStateContext)

    if(!context) {
        throw new Error("There is no Navigation State Context for this operation.")
    }

    return context
}