"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function SideBar() {
    return (
        <div className="pt-4 ps-4 pb-4 h-full w-1/5">
            <nav className="shadow-md h-full bg-white rounded-md">
                <Header title="Hello React" />
                <MenuGroup />
            </nav>
        </div>
    )
}

function Header({title}:{title:string}) {
    return (
        <div className="p-4">
            <h1 className="text-xl">{title}</h1>
        </div>
    )
}

interface MenuItemProp {
    menu:Route
    active:boolean
}

function MenuItem({menu, active} : MenuItemProp) {
    return (
        <li>
            <Link href={menu.url} className={`${active ? 'menu-item-active' : 'menu-item'}`}>
                {menu.name}
            </Link>
        </li>
    )
}

function MenuGroup() {
    var pathname = usePathname()
    return (
        <div className="py-4">
            <ul>
                {routes.map((item, index) => <MenuItem key={index} menu={item} active={pathname === item.url} />)}
            </ul>
        </div>
    )
}

const routes:Route[] = [
    {name: 'Home', url: '/'},
    {name: 'Use State', url: '/state'},
    {name: 'Using Form', url: '/form'},
    {name: 'Nested Route', url: '/nested'},
    {name: 'Fetching Data', url: '/fetch'},
]

interface Route {
    readonly name:string 
    readonly url:string
}