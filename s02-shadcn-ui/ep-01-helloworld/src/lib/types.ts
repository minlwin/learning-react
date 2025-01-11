import { ReactNode } from "react"

export type Children = Readonly<{
    children: React.ReactNode
}>

export type MenuModel = {
  name:string
  icon:ReactNode
  url:string
}

export type MenuGroupModel = {
    title:string
    menus:MenuModel[]
}