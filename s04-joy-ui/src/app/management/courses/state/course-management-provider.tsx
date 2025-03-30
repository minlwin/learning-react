import React from "react";
import { CourseSearchOpenStateProvider } from "./course-search-open-state";

export default function CourseManagementProvider({children} : {children : React.ReactNode}) {
    return (
        <CourseSearchOpenStateProvider>
            {children}
        </CourseSearchOpenStateProvider>
    )
}