import { useActiveMenu } from "@/states/active-menu-state"

export default function NavBar() {

    const activeMenu = useActiveMenu(state => state.activeMenu)
    
    return (
        <nav className="bg-slate-700 text-slate-200 py-4 px-16 flex justify-between items-center">
            <h1 className="text-xl">State Management</h1>
  
            <ul className="flex gap-4">
              {MENUS.map((menu, index) => (
                <li key={index}>
                  <a href={menu.url} className={menu.id === activeMenu ? 'text-white' : ''}>{menu.name}</a>
                </li>
              ))}
            </ul>
        </nav>
    )
  }
  
  type Menu = {
    id : string
    name : string
    url : string
  }
  
  const MENUS : Menu [] = [
    {id: 'state', name : "Use State", url : "/state"},
    {id: 'reducer', name : "Use Reducer", url : "/reducer"},
    {id: 'context', name : "Use Context", url : "/context"},
  ]
  