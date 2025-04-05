'use client'
import "./globals.css";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Logout, Menu } from "@mui/icons-material";
import { AppBar, Box, Button, Container, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { SelectedMenuProvider, useSelectedMenu } from "@/commons/context/selected-menu-context";
import SideMenu from "@/commons/components/side-menu";
import PageTitle from "@/commons/components/page-title";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <SelectedMenuProvider>
          <MainLayout>
            {children}
          </MainLayout>
        </SelectedMenuProvider>
      </body>
    </html>
  );
}

function MainLayout({children} : {
  children: React.ReactNode
}) {

  const menu = useSelectedMenu()
  const [open, setOpen] = useState(false)

  const toggleDrawer = (state:boolean) => {
    setOpen(state)
  }

  return (
    <>
      <AppBar position="sticky" sx={{backgroundColor : 'blueviolet', boxShadow : 'none'}}>
        <Container maxWidth="xl">
          <Toolbar className="flex items-center">
            <Box className="flex-grow-1 flex flex-row items-center">
              <IconButton color="inherit" onClick={() => toggleDrawer(true)}>
                <Menu className="me-1"/>
              </IconButton>
              <Typography variant="h6">JDC Portal</Typography>
            </Box>
            
            <Box>
              <Button color="inherit" startIcon={<Logout />}>Sign Out</Button>
            </Box>
          </Toolbar>
        </Container>

        <Drawer open={open} onClose={() =>  toggleDrawer(false)} >
          <SideMenu onSelect={() => toggleDrawer(false)} />
        </Drawer>
      </AppBar>

      <Container maxWidth="xl">
        <div className="px-8 py-4">
          <PageTitle menu={menu} />
          {children}
        </div>
      </Container>        
    </>
  ) 
}