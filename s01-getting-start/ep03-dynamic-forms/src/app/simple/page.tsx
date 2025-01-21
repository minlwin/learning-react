'use client'
import { FieldError } from "@/components/field-error";
import { useFormResult } from "@/lib/form-result.provider";
import { Button, Label, Select, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";

export default function Page() {

    const { 
        register, 
        handleSubmit, 
        formState : {errors} 
    } = useForm<SimpleFormData>()

    const { setResult } = useFormResult()
    
    const save = (form:SimpleFormData) => {
        setResult(form)
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <h1 className="text-2xl">Simple Form</h1>

            <div className="grid grid-cols-2 gap-4 mt-4">

                <div>
                    <Label className="block mb-1">Name</Label>
                    <TextInput placeholder="Enter Name" {...register('name', {
                        required : "Please enter your name."
                    })} />
                    <FieldError message={errors.name?.message} />
                </div>

                <div className="col-start-1">
                    <Label className="block mb-1">Phone</Label>
                    <TextInput placeholder="Enter Phone" type="tel" {...register('phone', {
                        required: "Please enter your phone."
                    })} />
                    <FieldError message={errors.phone?.message} />
                </div>

                <div>
                    <Label className="block mb-1">Email</Label>
                    <TextInput placeholder="Enter Email" type="email" {...register('email', {
                        required: "Please enter email address."
                    })} />
                    <FieldError message={errors.email?.message} />
                </div>

                <div className="col-start-1">
                    <Label className="block mb-1">Gender</Label>
                    <Select {...register('gender', {
                        required: "Please select gender."
                    })}>
                        <option value="">Select Gender</option>
                        {['Male', 'Female'].map(item => (
                            <option key={item} value={item}>{item}</option>
                        ))}
                    </Select>
                    <FieldError message={errors.gender?.message} />
                </div>

                <div>
                    <Label className="block mb-1">Date Of Birth</Label>
                    <TextInput type="date" {...register('dob', {
                        required : "Please enter date of birth."
                    })} />
                    <FieldError message={errors.dob?.message} />
                </div>

                <div className="col-start-1">
                    <Button type="submit">
                        Save Data
                    </Button>
                </div>

            </div>
        </form>
    )
}

type SimpleFormData = {
    name : string
    phone : string
    email : string
    gender : string
    dob : Date | null
}