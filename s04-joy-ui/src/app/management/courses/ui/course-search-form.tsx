'use client'
import { Button, Drawer, FormControl, FormLabel, Input, Option, Select } from "@mui/joy";
import { useCourseSearchOpenState, useSetCourseSearchOpenState } from "../state/course-search-open-state";
import { FilterAltOutlined, Search } from "@mui/icons-material";

export default function CourseSearchForm() {
    const openState = useCourseSearchOpenState()
    const setOpenState = useSetCourseSearchOpenState()

    return (
        <Drawer anchor="right" open={openState} onClose={() => setOpenState(false)}>
            <section className="px-8 py-4">
                <div className="flex items-center">
                    <FilterAltOutlined className="me-2"/> Filter Options
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


                    <div className="grid grid-cols-2 gap-4">
                        <FormControl className="mb-3">
                            <FormLabel>Status</FormLabel>
                            <Select placeholder="Search Status">
                                <Option value={undefined}>Search All</Option>
                                <Option value={false}>Active</Option>
                                <Option value={true}>Deleted</Option>
                            </Select>
                        </FormControl>


                        <FormControl className="mb-3">
                            <FormLabel>Size</FormLabel>
                            <Select defaultValue={"10"}>
                                <Option value={""}>Page Size</Option>
                                <Option value={"10"}>10</Option>
                                <Option value={"25"}>25</Option>
                                <Option value={"50"}>50</Option>
                            </Select>
                        </FormControl>
                    </div>

                    <Button startDecorator={<Search/>}>Search</Button>
                </form>
            </section>
        </Drawer>
    )
}

type CourseSearch = {
    name?: string,
    level?: 'Foundation' | 'Intermediate' | 'Advance' | 'One Stop' | ''
    deleted?: boolean
    page?: number
    size? : number
}