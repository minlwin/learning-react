import React from "react";
import { CourseSearchOpenStateProvider } from "./course-search-open-state";
import { CourseEditOpenStateProvider } from "./course-edit-open-state";

export default function CourseManagementProvider({children} : {children : React.ReactNode}) {
    return (
        <CourseSearchOpenStateProvider>
            <CourseEditOpenStateProvider>
                {children}
            </CourseEditOpenStateProvider>
        </CourseSearchOpenStateProvider>
    )
}