"use client"

import React, { createContext, useContext, useState } from "react"
import { User } from "../form/models"

type UsersContextType = {
    users:Partial<User>[],
    setUsers:React.Dispatch<React.SetStateAction<Partial<User>[]>>
    addUser:(user:Partial<User>) => void
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
    return (
        <UsersContext.Provider value={{users, setUsers, addUser}}>
            {children}
        </UsersContext.Provider>
    )
}