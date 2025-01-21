'use client'
import "./globals.css";
import { Children } from "@/model/commons";
import NavBar from "@/components/nav-bar";

export default function RootLayout({children} : Children) {
  return (
    <html>
      <body>
        <NavBar />
        <div className="px-16 py-4">
          {children}
        </div>
      </body>
    </html>
  )
}

