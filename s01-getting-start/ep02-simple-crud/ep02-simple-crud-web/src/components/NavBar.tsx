'use client'
import { useActiveMenu } from "@/model/providers/ActiveMenuProvider";
import Link from "next/link";
import { useEffect } from "react";

export default function NavBar() {

    const {activeMenu} = useActiveMenu()

    useEffect(() => {
        document.title = `SIMPLE CRUD | ${activeMenu === undefined ? 'Home' : activeMenu.toUpperCase()}`
    }, [activeMenu])

    return (
        <nav className="navbar">
            <Link href={"/"} className="navbar-brand">Simple CRUD</Link>

            <ul className="navbar-nav">
                <li>
                    <Link className={activeMenu === 'section' ? 'active' : ''} href={"/sections"}>Section Management</Link>
                </li>
                <li>
                    <Link className={activeMenu === 'course' ? 'active' : ''} href={"/courses"}>Course Management</Link>
                </li>
            </ul>
        </nav>
    )
}