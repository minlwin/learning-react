"use client"

import { useRouter } from "next/navigation"

export default function BackLink({name}: {name:string}) {
    const router = useRouter()
    const back = () => router.back()
    return (
        <div onClick={back}>
            {name}
        </div>
    )
}