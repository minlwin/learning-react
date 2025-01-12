'use client'

import { createContext, useContext, useState } from "react";
import { Children, CourseInfo } from "../types";

type CourseResultModel = {
    list: CourseInfo[]
    setList(list: CourseInfo[]):void
}
const CourseResultContext = createContext<CourseResultModel | undefined>(undefined)
const useCourseResult = () => {
    const context = useContext(CourseResultContext)
    if(!context) {
        throw new Error("Invalid usage of course result context.")
    }
    return context
}

function CourseResultProvider({children}:Children) {
    const [list, setList] = useState<CourseInfo[]>([])

    return (
        <CourseResultContext.Provider value={{list, setList}}>
            {children}
        </CourseResultContext.Provider>
    )
}

export {CourseResultProvider, useCourseResult}

