export default function MenuItem({icon, name, href} : Readonly<MenuItemModel>) {
    return (
        <a href={href} className="flex ms-4">
            <span>{icon}</span> 
            <span>{name}</span>
        </a>
    )
}

export interface MenuItemModel {
    icon: React.ReactNode,
    name: string,
    href: string
}