'use client'
import { createContext, useContext, useState } from "react";
import { Children, CourseInfo } from "..";

export default function CoursesProvider({children} : Children) {
    const [courses, setCourses] = useState<CourseInfo[] | undefined>()

    return (
        <CoursesContext.Provider value={{courses, setCourses}}>
            {children}
        </CoursesContext.Provider>
    )
}

type CoursesContextModel = {
    courses?: CourseInfo[]
    setCourses(courses?: CourseInfo[]):void
}

const CoursesContext = createContext<CoursesContextModel | undefined>(undefined)

export const useCourses = () => {
    const context = useContext(CoursesContext)
    if(!context) {
        throw new Error("Invalid context for Courses Context")
    }
    return context
}