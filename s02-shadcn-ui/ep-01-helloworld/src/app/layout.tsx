import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSkeleton, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Children, MenuGroupModel } from "@/lib/types";
import { ChevronDown, Home, Power, Shield, User, UserCheck } from "lucide-react";
import Link from "next/link";
import "./globals.css"
import { dailyWorks, masterData } from "@/lib/menus";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@radix-ui/react-collapsible";

export default function RootLayout({children}:Children) {
  return (
    <html>
      <body>
        <SidebarProvider>
          <AppSideBar />
          <main className="p-4 w-full">
            <nav className="pb-2 flex gap-2 items-center">
              <SidebarTrigger />
              <h1>Hello Shadcn/UI</h1>
            </nav>
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  )
}

function AppSideBar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <h1 className="ps-2 pt-2 text-xl">JDC Portal</h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="/" className="flex gap-2">
                      <Home />
                      <span>Home</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <AppMenuGroup title="Daily Works" menus={dailyWorks} />
        <AppMenuGroup title="Master Data" menus={masterData} />

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <Collapsible defaultOpen className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      <User />
                      <span>Personal</span>
                      <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild>
                          <Link href={"/"}>
                            <UserCheck /> Profile
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild>
                          <Link href={"/"}>
                            <Shield /> Change Password
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>              
              </Collapsible>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>  
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Power /> Sign Out
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

    </Sidebar>
  )
}

function AppMenuGroup({title, menus}: MenuGroupModel) {
  return (
    <SidebarGroup>
      {title && 
        <SidebarGroupLabel>
          <span>{title}</span>
        </SidebarGroupLabel>
      }          

      <SidebarGroupContent>
        <SidebarMenu>
          {menus.map((menu, index) => 
            <SidebarMenuItem key={index}>
              <SidebarMenuButton asChild>
                <Link href={menu.url}>
                  {menu.icon}
                  <span>{menu.name}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          )}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}