"use client"

import { User } from "@/app/form/models";
import FormGroup from "@/components/forms/form-group";
import PageTitle from "@/components/page-title";
import { useContext, useEffect, useState } from "react";
import { UsersContext } from "../layout";
import { v4 as uuid } from "uuid"
import { useRouter } from "next/navigation";

export default function EditUser () {

    const router = useRouter()
    const [user, setUser] = useState<Partial<User>>({})
    const [errors, setErrors] = useState<Partial<User>>({})
    const hasError = errors.name || errors.dob || errors.gender || errors.phone || errors.email

    const setName = (value:string) => setUser(prev => ({...prev, name : value}))
    const setPhone = (value:string) => setUser(prev => ({...prev, phone : value}))
    const setEmail = (value:string) => setUser(prev => ({...prev, email : value}))
    const setGender = (value:string) => setUser(prev => ({...prev, gender : value}))
    const setDob = (value:string) => setUser(prev => ({...prev, dob : value}))
    
    useEffect(() => {
        console.log(user)
        var validationError:Partial<User> = {}
        validationError.name = user.name ? "" : "Please enter name."
        validationError.phone = user.phone ? "" : "Please enter phone."
        validationError.email = user.email ? "" : "Please enter email."
        validationError.gender = user.gender ? "" : "Please select gender."
        validationError.dob = user.dob ? "" : "Please enter date of birth."
        setErrors(validationError)
    }, [user]) 
    
    const context = useContext(UsersContext)

    const onSubmit = () => {
        if(!hasError) {
            context?.addUser({... user, id : uuid()})
            router.push("/nested")
        }
    }

    return (
        <>
            <PageTitle title="Add New User" />

            <form action={onSubmit} className="w-3/5 grid grid-cols-2 mt-4 gap-8">

                <FormGroup className="col-span-2" label="User Name">
                    <input value={user.name || ''} onChange={e => setName(e.target.value)} type="text" placeholder="Enter User Name" className="form-control" />
                    {errors.name && <span>{errors.name}</span>}
                </FormGroup>

                <FormGroup label="Date of Birth">
                    <input value={user.dob || ''} onChange={e => setDob(e.target.value)} type="date" className="form-control" />
                    {errors.dob && <span>{errors.dob}</span>}
                </FormGroup>  

                <FormGroup label="Gender">
                    <select value={user.gender || ''} onChange={e => setGender(e.target.value)} className="form-select">
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>                    
                    {errors.gender && <span>{errors.gender}</span>}
                </FormGroup>          

                <FormGroup label="Phone">
                    <input value={user.phone || ''} onChange={e => setPhone(e.target.value)} type="tel" placeholder="Enter Phone Number" className="form-control" />
                    {errors.phone && <span>{errors.phone}</span>}
                </FormGroup>

                <FormGroup label="Email">
                    <input value={user.email || ''} onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter Email Address" className="form-control" />
                    {errors.email && <span>{errors.email}</span>}
                </FormGroup>

                <button type="submit" className="outline-btn">
                    Save Student
                </button>
            </form>
        </>
    )
}