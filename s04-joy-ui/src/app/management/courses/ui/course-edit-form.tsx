'use client'
import { Drawer, FormControl, FormLabel, Input, Option, Select } from "@mui/joy";
import { useCourseEditOpenState, useSetCourseEditOpenState } from "../state/course-edit-open-state";
import { Add } from "@mui/icons-material";

export default function CourseEditForm() {
    const openState = useCourseEditOpenState()
    const setOpenState = useSetCourseEditOpenState()
    return (
        <Drawer anchor="right" open={openState} onClose={() => setOpenState(false)}>
            <section className="px-8 py-4">
                <div className="flex items-center">
                    <Add className="me-2"/> Create Course
                </div>

                <form className="mt-4">

                    <FormControl className="mb-3">
                        <FormLabel>Course Name</FormLabel>
                        <Input placeholder="Search Course Name"/>
                    </FormControl>

                    <FormControl className="mb-3">
                        <FormLabel>Course Level</FormLabel>
                        <Select placeholder="Search Level">
                            <Option value={""}>Search All</Option>
                        </Select>
                    </FormControl>
                </form>
            </section>    
        </Drawer>
    )
}