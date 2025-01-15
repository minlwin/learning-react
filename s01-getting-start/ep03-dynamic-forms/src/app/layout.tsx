import { Childern, MenuItem } from "@/lib/types";
import "./globals.css";
import Link from "next/link";

export default function Layout({children} : Childern) {
  return (
    <html>
      <body>
        <nav className="py-4 px-16 bg-teal-800 text-teal-200 flex items-center justify-between">
          <span className="text-2xl">Using Forms</span>

          <ul className="flex gap-4">
            {MENUS.map((item, index) => (
              <li key={index}>
                <Link href={item.url}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <main className="py-4 px-16">
          { children }
        </main>
      </body>
    </html>
  )
}

const MENUS : MenuItem[] = [
  {name : 'Simple Form', url : '/simple'},
  {name : 'Form Array', url : '/array'},
  {name : 'Dynamic Form Item', url : '/dynamic/item'},
  {name : 'Dynamic Form Array', url : '/dynamic/array'},
]