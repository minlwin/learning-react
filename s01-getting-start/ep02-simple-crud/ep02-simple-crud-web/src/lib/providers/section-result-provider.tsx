'use client'

import { createContext, useContext, useState } from "react"
import { Children, SectionInfo } from "../types"

type SectionListModel = {
    list:SectionInfo[]
    setList(list:SectionInfo[]):void
}

const SectionListContext = createContext<SectionListModel | undefined>(undefined)

const useSectionList = () => {
    const context = useContext(SectionListContext)
    if(!context) {
        throw new Error("Invalid context usage for Section List Context.")
    }
    return context
} 

function SectionListProvider({children} : Children) {
    const [list, setList] = useState<SectionInfo[]>([])
    return (
        <SectionListContext.Provider value={{list, setList}}>
            {children}
        </SectionListContext.Provider>
    )
}

export {SectionListProvider, useSectionList}