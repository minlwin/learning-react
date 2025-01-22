import { User, UserForm } from "@/model/users"

export function usersReducer(users : User[], action : {
    type : 'add' | 'remove'
    user? : UserForm
    id? : number
}) {
    
    if(action.type === 'add' && action.user) {
        return [...users, {...action.user, id : users.length + 1}]
    }

    if(action.type === 'remove' && action.id) {
        return users.filter(a => a.id !== action.id)
    }

    return users
}
