"use client"

import { NavStateProvider, useActiveMenu } from "@/utils/providers/NavStateProvider";
import "./globals.css";
import { FaHome } from "react-icons/fa";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <NavStateProvider>
          <body>
            <NavBar />

            <div className="container px-16 py-4">
              {children}
            </div>
          </body>
        </NavStateProvider>
    </html>
  );
}

function NavBar() {

  const {activeMenu} = useActiveMenu()

  return (
    <nav className="py-4 px-16 bg-black text-gray-400 flex justify-between">
      <Link href="/" className="text-white font-extrabold flex items-center">
        <FaHome size={20} className="me-2" /> Simple CRUD
      </Link>

      <ul className="flex navbar-nav">
        <li>
          <Link href="/sections" className={activeMenu === 'section' ? 'active' : ''}>
            Section Management
          </Link>
        </li>
        <li>
          <Link href="/courses" className={activeMenu === 'course' ? 'active' : ''}>
            Course Management
          </Link>
        </li>
      </ul>
    </nav>
  )
}