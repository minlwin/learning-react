import { Children } from "@/model";
import CoursesProvider from "@/model/providers/CoursesProvider";

export default function Layout({children} : Children) {
    return (
        <CoursesProvider>
            {children}
        </CoursesProvider>
    )
}