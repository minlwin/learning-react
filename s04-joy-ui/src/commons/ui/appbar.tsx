'use client'

import { Logout, Menu } from "@mui/icons-material";
import { useDrawerStateSetter } from "../state/drawer-state";

export default function AppBar() {

    const setDrawerState = useDrawerStateSetter()

    return (
        <nav className="bg-purple-600 text-white px-16 py-4 flex justify-between">
            <div onClick={() => setDrawerState(true)} className="flex items-center cursor-pointer">
                <Menu className="me-2"/> JDC Portal
            </div>

            <div className="flex items-center cursor-pointer">
                <Logout className="me-2"/> Sign Out
            </div>
        </nav>
    )
}