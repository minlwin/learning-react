"use client"

import JsonViewer from "@/components/json-viewer";
import { use, useContext, useState } from "react";
import { UsersContext } from "../../layout";
import PageTitle from "@/components/page-title";
import Link from "next/link";

export default function Details({params}: {params: Promise<{id:string}>}) {

    const {id} = use(params)

    const context = useContext(UsersContext)
    const [user, _] = useState(context?.findById(id))
    return (
        <>
            <div className="flex justify-between">
                <PageTitle title="User Details" />

                <Link href={'/nested/list'} className="outline-btn">User List</Link>
            </div>

            <div className="py-4">
                <JsonViewer data={user} />
            </div>
        </>
    )
}