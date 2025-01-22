'use client'
import EditForm from "@/components/edit-form"
import PageTitle from "@/components/page-title"
import ResultList from "@/components/result-list"
import { useActiveMenu } from "@/states/active-menu-state"
import { usersReducer } from "@/states/users-reducer"
import { useReducer } from "react"

export default function Page() {

    const setActiveMenu = useActiveMenu(state => state.setActiveMenu)
    setActiveMenu('reducer')
    const [state, dispatch] = useReducer(usersReducer, [])
    
    return (
        <>
            <PageTitle title="Use Reducer Demo" />

            <div className="mt-4 flex gap-8">
                <div className="w-1/4">
                    <EditForm add={user => dispatch({type : "add", user : user})} />
                </div>
                <div className="flex-grow">
                    {state.length > 0 && <ResultList list={state} remove={id => dispatch({type : 'remove', id : id})} />}
                </div>
            </div>
        </>
    )
}