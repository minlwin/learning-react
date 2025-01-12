import AppSidebar from "@/components/app/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Children } from "@/lib/types";

import './globals.css'
import { ActiveMenuProvider } from "@/lib/providers/active-menu-provider";
import AppTitle from "@/components/app/app-title";

export default function RootLayout({children}:Children) {
  return (
    <ActiveMenuProvider>
      <html>
        <body>
          <SidebarProvider>
            <AppSidebar />
            <main className="w-full p-4">
              <AppTitle />

              <div className="pt-4">
                {children}
              </div>
            </main>
          </SidebarProvider>
        </body>
      </html>
    </ActiveMenuProvider>
  )
}