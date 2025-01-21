export type UserForm = {
    name : string,
    phone : string,
    email : string
}

export type User = {
    id : number,
} & UserForm

export type AddUser = (form: UserForm) => void
export type RemoveUser = (id : number) => void