'use client'
import EditForm from "@/components/edit-form"
import PageTitle from "@/components/page-title"
import ResultList from "@/components/result-list"
import { User, UserForm } from "@/model/users"
import { useActiveMenu } from "@/states/active-menu-state"
import { useState } from "react"

export default function Page() {

    const setActiveMenu = useActiveMenu(state => state.setActiveMenu)
    setActiveMenu('state')

    const [users, setUsers] = useState<User[]>([])
    const [id, setId] = useState<number>(1)
    
    const removeUser = (id : number) => setUsers(users.filter(user => user.id != id))
    const addUser = (form : UserForm) => {
        const user : User = {id : id, ...form}
        setUsers([...users, user])
        setId(id + 1)
    }
    
    return (
        <>
            <PageTitle title="Use State Demo" />
            <div className="mt-4 flex gap-8">
                <div className="w-1/4">
                    <EditForm add={addUser} />
                </div>
                <div className="flex-grow">
                    {users.length > 0 && <ResultList list={users} remove={removeUser} />}
                </div>
            </div>
        </>
    )
}