'use client'

import PageTitle from "@/components/PageTitle";
import { useActiveMenu } from "@/model/providers/ActiveMenuProvider";
import { useEffect } from "react";

export default function Home() {
  const {setActiveMenu} = useActiveMenu()

  useEffect(() => setActiveMenu(undefined), [])

  return (
    <>
      <PageTitle title="Simple CRUD" />
    </>
  )
}