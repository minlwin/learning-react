'use client'
import EditForm from "@/components/edit-form-provided"
import PageTitle from "@/components/page-title"
import ResultList from "@/components/result-list-provided"
import { useActiveMenu } from "@/states/active-menu-state"
import { UsersProvider } from "@/states/users-provider"

export default function Page() {

   const setActiveMenu = useActiveMenu(state => state.setActiveMenu)
   setActiveMenu('context')

    return (
        <UsersProvider>
            <PageTitle title="Use Context Demo" />
            <div className="mt-4 flex gap-8">
                <div className="w-1/4">
                    <EditForm />
                </div>
                <div className="flex-grow">
                    <ResultList />
                </div>
            </div>
        </UsersProvider>
    )
}