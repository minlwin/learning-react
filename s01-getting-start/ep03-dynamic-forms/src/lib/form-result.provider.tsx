'use client'
import { createContext, useContext, useState } from "react"
import { Children } from "./types"

type FormResultContextType = {
    result : any
    setResult : (result : any) => void
}

const FormResultContext = createContext<FormResultContextType | undefined>(undefined)

function FormResultProvider({children} : Children) {
    const [result, setResult] = useState()

    return (
        <FormResultContext.Provider value={{result, setResult}}>
            {children}
        </FormResultContext.Provider>
    )
}

function useFormResult() {
    const context = useContext(FormResultContext)
    if(!context) {
        throw new Error('Invalid usage of Form Result Context.')
    }
    return context
}

export {FormResultProvider, useFormResult}