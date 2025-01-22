import { UserForm } from "@/model/users"
import { Label, TextInput, Button } from "flowbite-react"
import { useForm } from "react-hook-form"
import { BiSave } from "react-icons/bi"
import FieldError from "./field-error"
import { useUsers } from "@/states/users-provider"

export default function EditForm() {

    const {register, handleSubmit, setValue, formState : {errors}} = useForm<UserForm>()
    
    const {dispatch} = useUsers()
    
    const addUser = (form : UserForm) => {
        dispatch({
            type : 'add',
            user : form
        })
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