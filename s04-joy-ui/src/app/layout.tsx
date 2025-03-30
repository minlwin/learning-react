'use client'

import AppBar from "@/commons/ui/appbar";
import "./globals.css";
import '@fontsource/inter';
import { AppStateProvider } from "@/commons/state/app-state";
import { Drawer } from "@mui/joy";
import { useDrawerState, useDrawerStateSetter } from "@/commons/state/drawer-state";
import SideBar from "@/commons/ui/sidebar";
import { useSelectedMenu } from "@/commons/state/selected-menu-state";
import { Home } from "@mui/icons-material";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppStateProvider>
      <html lang="en">
        <MainLayout>
          {children}
        </MainLayout>
      </html>
    </AppStateProvider>
  );
}

function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const drawerState = useDrawerState()
  const setDrawerState = useDrawerStateSetter()
  const selectedMenu = useSelectedMenu()

  return (
    <body>
      <AppBar />
      <Drawer size="sm" open={drawerState} onClose={() => setDrawerState(false)}>
        <SideBar />
      </Drawer>

      <main className="px-16 py-4">

        <div className="flex items-center mb-4">
          <span className="me-2">
            {selectedMenu?.icon || <Home />}
          </span>
          <span>
            {selectedMenu?.title || 'Home'}
          </span>
        </div>

        {children}
      </main>
  </body>
  )
}
