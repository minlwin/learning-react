export type User = {
    id: number
    name: string
    phone: string
    email: string
}

export function updateUser(
    user:User, 
    fieldToUpdate:Partial<User>) {
    return {...user, ...fieldToUpdate}
}