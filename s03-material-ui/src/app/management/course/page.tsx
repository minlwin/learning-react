'use client'

import ManagementControl from "@/commons/components/management-control";
import { Drawer } from "@mui/material";
import { useState } from "react";
import { CourseFilter } from "./course-filter";
import CourseList from "./course-list";

export default function CourseManagement() {

    const [openFilter, setOpenFilter] = useState(false)
    const [openAddNew, setOpenAddNew] = useState(false)

    const search = () => {

    }
 
    return (
        <>
            <nav className="mt-3">
                <ManagementControl 
                    onReload={search}
                    onFilter={() => setOpenFilter(true)} 
                    onAddNew={() => setOpenAddNew(true)} />
            </nav>

            <Drawer anchor="right" open={openFilter} onClose={() => setOpenFilter(false)}>
                <CourseFilter />
            </Drawer>

            <Drawer anchor="right" open={openAddNew} onClose={() => setOpenAddNew(false)}>
                <CourseFilter />
            </Drawer>

            <section>
                <CourseList />
            </section>
        </>
    )
}