'use client'
import React, { createContext, useContext, useState } from "react"

type CourseSearchOpenContextType = {
    open : boolean,
    setOpen : (open:boolean) => void
}

const CourseSearchOpenContext = createContext<CourseSearchOpenContextType | undefined>(undefined)

function CourseSearchOpenStateProvider({children} : {children : React.ReactNode}) {
    const [open, setOpen] = useState(false)
    return (
        <CourseSearchOpenContext.Provider value={{open : open, setOpen : setOpen}}>
            {children}
        </CourseSearchOpenContext.Provider>
    )
}

function useCourseSearchOpenContext() {
    const context = useContext(CourseSearchOpenContext)

    if(context === undefined) {
        throw new Error('Invalid usage of Course Search Open State Context.')
    }

    return context
}

function useCourseSearchOpenState() {
    return useCourseSearchOpenContext().open
}

function useSetCourseSearchOpenState() {
    return useCourseSearchOpenContext().setOpen
}

export {
    CourseSearchOpenStateProvider,
    useCourseSearchOpenState,
    useSetCourseSearchOpenState
}