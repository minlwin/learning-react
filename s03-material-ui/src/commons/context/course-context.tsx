import { createContext, Dispatch, useContext, useReducer } from "react";
import { CourseAction, courseReducer } from "./course-reducer";
import { Course, CourseModel } from "../model/course-model";

const courseModelContext = createContext<CourseModel | undefined>(undefined)
const courseReducerContext = createContext<Dispatch<CourseAction> | undefined>(undefined)

function CourseModelProvider({children} : {children : React.ReactNode}) {
    const [model, dispatch] = useReducer(courseReducer, new Map<number, Course>)

    return (
        <courseModelContext.Provider value={model}>
            <courseReducerContext.Provider value={dispatch}>
                {children}
            </courseReducerContext.Provider>
        </courseModelContext.Provider>
    )
}

function useCourseModel() {
    const context = useContext(courseModelContext)
    if(context == undefined) {
        throw Error('Invalid usage of Course Context')
    }
    return context
}

function useCourseList() {
    return useCourseModel().values().toArray()
}

function useCourseDispatcher() {
    const context = useContext(courseReducerContext)
    if(context == undefined) {
        throw Error('Invalid usage of Course Context')
    }
    return context
}

export {
    CourseModelProvider,
    useCourseList,
    useCourseDispatcher
}