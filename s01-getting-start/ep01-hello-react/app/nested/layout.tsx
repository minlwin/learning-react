"use client"

import React, { createContext, useContext, useState } from "react"
import { User } from "../form/models"

type UsersContextType = {
    users:Partial<User>[],
    setUsers:React.Dispatch<React.SetStateAction<Partial<User>[]>>
    addUser:(user:Partial<User>) => void
    findById:(id:string)=>Partial<User> | undefined
}

export const UsersContext = createContext<UsersContextType | undefined>(undefined)

export const useUsers = () => {
    const context = useContext(UsersContext)

    if(!context) {
        throw "There is no context."
    }

    return context.users
}

export default function RootLayout ({children} : {children : React.ReactNode}) {

    const [users, setUsers] = useState<Partial<User>[]>([])
    
    const addUser = (user:Partial<User>) => {
        setUsers([... users, user])
    }

    console.log("Nested Layout Display again")

    const findById = (id:string) => users.filter(user => user.id === id).pop()

    return (
        <UsersContext.Provider value={{users, setUsers, addUser, findById}}>
            {children}
        </UsersContext.Provider>
    )
}