'use client'
import { User, UserForm } from "@/model/users"
import { ActionDispatch, createContext, useContext, useReducer } from "react"
import { usersReducer } from "./users-reducer"
import { Children } from "@/model/commons"

type UsersContextType = {
    users : User []
    dispatch : ActionDispatch<[action: {
        type: "add" | "remove";
        user?: UserForm;
        id?: number;
    }]>
}

const UsersContext = createContext<UsersContextType | undefined>(undefined)

function UsersProvider({children} : Children) {
    const [users, dispatch] = useReducer(usersReducer, [])

    return (
        <UsersContext.Provider value={{users, dispatch}}>
            {children}
        </UsersContext.Provider>
    )
}

function useUsers() {
    const context = useContext(UsersContext)

    if(!context) {
        throw new Error('Invalid usage of User Context')
    }
    
    return context
}


export {UsersProvider, useUsers}