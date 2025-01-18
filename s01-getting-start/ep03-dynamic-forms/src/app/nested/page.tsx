'use client'

import { useFormResult } from "@/lib/form-result.provider"
import { Genders } from "@/lib/types"
import { Button, Label, Select, Textarea, TextInput } from "flowbite-react"
import { useForm } from "react-hook-form"

type Member = {
    name : string
    gender : 'Male' | 'Female'
    dob : string
    contact : { 
        phone : string
        email : string
        address : string
    }
}

export default function Page() {

    const {register, handleSubmit, formState : {errors}} = useForm<Member>()
    const {setResult} = useFormResult()

    return (
        <>
            <h1 className="text-2xl">Nested Form</h1>
            <form onSubmit={handleSubmit(setResult)} className="grid grid-cols-2 gap-4">

                <div>
                    <Label>Member Name</Label>
                    <TextInput placeholder="Enter your name." {...register('name', {
                        required : 'Please enter member name.'
                    })} />
                    {errors.name && <span className="error">{errors.name.message}</span>}
                </div>

                <div className="col-start-1">
                    <Label>Gender</Label>
                    <Select {...register('gender', {
                        required : 'Please select gender.'
                    })}>
                        <option value="">Select Gender</option>
                        {Genders.map(item => (
                            <option key={item} value={item}>{item}</option>
                        ))}
                    </Select>
                    {errors.gender && <span className="error">{errors.gender.message}</span>}
                </div>

                <div>
                    <Label>Date of Birth</Label>
                    <TextInput type="date" {...register('dob', {
                        required : 'Please enter date of birth.'
                    })} />
                    {errors.dob && <span className="error">{errors.dob.message}</span>}
                </div>

                <div>
                    <Label>Phone Number</Label>
                    <TextInput type="tel" placeholder="Enter your phone number." {...register('contact.phone', {
                        required : "Please enter phone number."
                    })} />
                    {errors.contact?.phone && <span className="error">{errors.contact.phone.message}</span>}
                </div>

                <div>
                    <Label>Email Address</Label>
                    <TextInput type="email" placeholder="Enter your email address." {...register('contact.email', {
                        required : "Please enter email address."
                    })} />
                    {errors.contact?.email && <span className="error">{errors.contact.email.message}</span>}
                </div>

                <div className="col-span-2">
                    <Label>Address</Label>
                    <Textarea placeholder="Enter your address." {...register('contact.address', {
                        required : 'Please enter address.'
                    })} />
                    {errors.contact?.address && <span className="error">{errors.contact.address.message}</span>}
                </div>
                
                <div>
                    <Button type="submit">
                        Save Form
                    </Button>
                </div>

            </form>
        </>
    )
}