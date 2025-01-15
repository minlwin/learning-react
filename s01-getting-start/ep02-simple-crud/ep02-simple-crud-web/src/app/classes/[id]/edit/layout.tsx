import { Card, CardContent } from "@/components/ui/card";
import { CourseResultProvider } from "@/lib/providers/course-result-provider";
import { Children } from "@/lib/types";

export default function Layout({children} : Children) {
    return (
        <CourseResultProvider>
            <Card>
                <CardContent>
                    {children}
                </CardContent>
            </Card>
        </CourseResultProvider>
    )
}