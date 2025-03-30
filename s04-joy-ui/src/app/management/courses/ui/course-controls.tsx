'use client'
import { Add, FilterAltOutlined, Refresh } from "@mui/icons-material";
import { Button, ButtonGroup } from "@mui/joy";
import { useSetCourseSearchOpenState } from "../state/course-search-open-state";

export default function CourseControls() {

    const setSearchOpenState = useSetCourseSearchOpenState()

    return (
        <ButtonGroup className="mb-4">
            <Button 
                startDecorator={<Refresh />}>Refresh</Button>
            
            <Button 
                onClick={() => setSearchOpenState(true)}
                startDecorator={<FilterAltOutlined />}>Filter</Button>
            
            <Button startDecorator={<Add />}>Create</Button>
        </ButtonGroup>
    )
}