import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CourseResultProvider } from "@/lib/providers/course-result-provider";
import { Children } from "@/lib/types";
import { Calendar } from "lucide-react";

export default function Layout({children} : Children) {
    return (
        <CourseResultProvider>
            <Card>
                <CardHeader>
                    <CardTitle>Edit Class</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex gap-4">
                        <Calendar size={240} />
                        {children}
                    </div>
                </CardContent>
            </Card>
        </CourseResultProvider>
    )
}