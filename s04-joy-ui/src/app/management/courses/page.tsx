import CourseManagementProvider from "./state/course-management-provider";
import CourseControls from "./ui/course-controls";
import CourseList from "./ui/course-list";
import CourseSearchForm from "./ui/course-search-form";

export default function CourseManagement() {
    return (
        <CourseManagementProvider>
            <CourseControls />
            <CourseList />
            <CourseSearchForm />
        </CourseManagementProvider>
    )
}