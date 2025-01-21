'use client'
import { FieldError } from "@/components/field-error"
import { useFormResult } from "@/lib/form-result.provider"
import { Button, Label, TextInput } from "flowbite-react"
import { useForm } from "react-hook-form"

type FormArray = {
    name : string,
    interests : string[]
}

export default function Page() {
    const {register, handleSubmit, formState : {errors}} = useForm<FormArray>({
        defaultValues : {
            name : "",
            interests : [
                "", 
                "", 
                ""
            ]
        }
    })

    const {setResult} = useFormResult()

    return (
        <>
            <h1 className="text-2xl">Form Array</h1>

            <form onSubmit={handleSubmit(setResult)} className="flex flex-col gap-3">
                <div>
                    <Label>Name</Label>
                    <TextInput {...register('name', {
                        required : "Please enter name."
                    })} />
                    <FieldError message={errors.name?.message} />
                </div>
                <div>
                    <Label>Interest 1</Label>
                    <TextInput {...register('interests.0', {
                        required : "Please enter interest item 1"
                    })} />
                    <FieldError message={errors.interests?.[0]?.message} />
                </div>
                <div>
                    <Label>Interest 2</Label>
                    <TextInput {...register('interests.1', {
                        required : "Please enter interest item 2"
                    })} />
                    <FieldError message={errors.interests?.[1]?.message} />
                </div>
                <div>
                    <Label>Interest 3</Label>
                    <TextInput {...register('interests.2', {
                        required : "Please enter interest item 3"
                    })} />
                    <FieldError message={errors.interests?.[2]?.message} />
                </div>

                <div>
                    <Button type="submit" >
                        Submit Form
                    </Button>
                </div>
            </form>
        </>
    )
}