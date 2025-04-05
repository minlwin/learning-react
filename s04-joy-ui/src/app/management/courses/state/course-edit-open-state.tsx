'use client'

import { createContext, useContext, useState } from "react"

type CourseEditOpenContextType = {
    open : boolean,
    setOpen : (open:boolean) => void
}

const CourseEditOpenContext = createContext<CourseEditOpenContextType | undefined>(undefined)

function CourseEditOpenStateProvider({children} : {children : React.ReactNode}) {
    const [open, setOpen] = useState(false)
    return (
        <CourseEditOpenContext.Provider value={{open : open, setOpen : setOpen}}>
            {children}
        </CourseEditOpenContext.Provider>
    )
}

function useCourseEditOpenContext() {
    const context = useContext(CourseEditOpenContext)

    if(context === undefined) {
        throw new Error('Invalid usage of Course Search Open State Context.')
    }

    return context
}

function useCourseEditOpenState() {
    return useCourseEditOpenContext().open
}

function useSetCourseEditOpenState() {
    return useCourseEditOpenContext().setOpen
}

export {
    CourseEditOpenStateProvider,
    useCourseEditOpenState,
    useSetCourseEditOpenState
}