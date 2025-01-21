'use client'
import FieldError from "@/components/field-error"
import PageTitle from "@/components/page-title"
import { useActiveMenu } from "@/states/active-menu-state"
import { Button, Label, Table, TextInput } from "flowbite-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { BiSave } from "react-icons/bi"
import { PiTrash } from "react-icons/pi"

type UserForm = {
    name : string,
    phone : string,
    email : string
}

type User = {
    id : number,
} & UserForm


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

function EditForm({add} : {add : (form : UserForm) => void}) {

    const {register, handleSubmit, setValue, formState : {errors}} = useForm<UserForm>()
    const addUser = (form:UserForm) => {
        add(form)
        setValue('name', '')
        setValue('phone', '')
        setValue('email', '')
    }

    return (
        <form onSubmit={handleSubmit(addUser)}>
            <div className="mb-3">
                <Label>Name</Label>
                <TextInput {...register('name', {
                    required : "Please enter name."
                })} placeholder="Enter Name"/>
                <FieldError message={errors.name?.message} />
            </div>

            <div className="mb-3">
                <Label>Phone</Label>
                <TextInput {...register('phone', {
                    required : "Please enter phone number."
                })} placeholder="Enter Phone" />
                <FieldError message={errors.phone?.message} />
            </div>

            <div className="mb-3">
                <Label>Email</Label>
                <TextInput {...register('email', {
                    required : "Please enter email address."
                })} placeholder="Enter email" />
                <FieldError message={errors.email?.message} />
            </div>

            <Button type="submit">
                <div className="flex gap-2 items-center">
                    <BiSave /> Save User
                </div>
            </Button>
        </form>
    )
}

function ResultList({list, remove} : {
    list : User[],
    remove : (id : number) => void 
}) {
    return (
        <Table className="mt-4" striped>
            <Table.Head>
                <Table.HeadCell>Id</Table.HeadCell>
                <Table.HeadCell>Name</Table.HeadCell>
                <Table.HeadCell>Phone</Table.HeadCell>
                <Table.HeadCell>Email</Table.HeadCell>
                <Table.HeadCell></Table.HeadCell>
            </Table.Head>

            <Table.Body>
                {list.map(item => (
                    <Table.Row key={item.id}>
                        <Table.Cell>{item.id}</Table.Cell>
                        <Table.Cell>{item.name}</Table.Cell>
                        <Table.Cell>{item.phone}</Table.Cell>
                        <Table.Cell>{item.email}</Table.Cell>
                        <Table.Cell>
                            <PiTrash onClick={() => remove(item.id)} />
                        </Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    )
}