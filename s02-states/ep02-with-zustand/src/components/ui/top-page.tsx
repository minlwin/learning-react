import React from "react"
import PageTitle from "./page-title"

type TopPageModel = {
    icon : React.ReactNode
    title : string
    action : React.ReactNode
    children : React.ReactNode
}

export default function TopPage({icon, title, action, children} : TopPageModel) {
    return (
        <>
            <div className="flex justify-between items-center">
                <PageTitle icon={icon} title={title} />
                {action}
            </div>

            <section className="mt-4">
                {children}
            </section>
        </>
    )
}