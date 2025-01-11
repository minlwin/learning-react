'use client'
import { createContext, useContext, useState } from "react"
import { Children, SectionInfo } from ".."

export default function SestionsProvider({children}:Children) {
    const [sections, setSections] = useState<SectionInfo[] | undefined>()
    return (
        <SectionsContext.Provider value={{sections, setSections}}>
            {children}
        </SectionsContext.Provider>
    )
}

type SectionsContextModel = {
    sections?: SectionInfo[]
    setSections(sections?: SectionInfo[]):void
}

const SectionsContext = createContext<SectionsContextModel | undefined>(undefined)

export const useSections = () => {
    const context = useContext(SectionsContext)
    if(!context) {
        throw new Error("Invalid context for Sections")
    }
    return context
}