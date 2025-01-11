import { createContext, useContext, useState } from "react"
import { Children } from "../types"

type MenuStateModel = {
    menu:string
    setMenu(menu:string):void
}

const MenuStateContext = createContext<MenuStateModel | undefined>(undefined)

function useMenuState() {
    const context = useContext(MenuStateContext)
    if(!context) {
        throw new Error("Invalid Usage of Menu Context")
    }
    return context
}

function MenuStateProvider({children}:Children) {
    const [menu, setMenu] = useState<string>('')

    return (
        <MenuStateContext.Provider value={{menu, setMenu}}>
            {children}
        </MenuStateContext.Provider>
    )
}

export {MenuStateProvider, useMenuState}