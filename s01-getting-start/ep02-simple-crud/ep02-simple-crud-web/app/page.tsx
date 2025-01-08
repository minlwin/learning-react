"use client"

import { useActiveMenu } from "@/utils/providers/NavStateProvider";
import { useEffect } from "react";

export default function Home() {

  const {setActiveMenu} = useActiveMenu()
  useEffect(() => setActiveMenu(undefined), [])
  
  return (
    <h1 className="text-3xl">Simple CRUD Application</h1>
  );
}
