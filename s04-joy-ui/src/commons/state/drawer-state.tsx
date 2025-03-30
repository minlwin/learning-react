'use client'

import React, { createContext, useContext, useState } from "react"

type DrawerContextType = {
    open:boolean
    setOpen:(open:boolean)=>void
}

const DrawerContext = createContext<DrawerContextType | undefined>(undefined)

function DrawerStateProvider({children}: {children: React.ReactNode}) {
    const [open, setOpen] = useState(false)
    return (
        <DrawerContext.Provider value={{open: open, setOpen: setOpen}}>
            {children}
        </DrawerContext.Provider>
    )
}

function useDrawer() {
    const context = useContext(DrawerContext)
    if(context == undefined) {
        throw Error('Invalid usage of Drawer State')
    }

    return context;
}

function useDrawerState() {
    return useDrawer().open
}

function useDrawerStateSetter() {
    return useDrawer().setOpen
}

export { DrawerStateProvider, useDrawerState, useDrawerStateSetter }