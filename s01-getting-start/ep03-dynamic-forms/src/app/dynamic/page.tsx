'use client'
import { FieldError } from "@/components/field-error"
import { useFormResult } from "@/lib/form-result.provider"
import { Button, Label, TextInput } from "flowbite-react"
import { useFieldArray, useForm } from "react-hook-form"
import { BiSend } from "react-icons/bi"
import { PiPlus, PiTrash } from "react-icons/pi"

type FormData = {
    name: string
    items : {
        key : string
        value : string
    }[]
}

export default function Page() {

    const {setResult} = useFormResult()
    const {register, handleSubmit, control, getValues, formState : {errors}} = useForm<FormData>({
        defaultValues: {
            name : "",
            items : [{
                key : "",
                value : ""
            }]
        }
    })

    const {append, remove, fields} = useFieldArray<FormData>({
        control : control,
        name :  "items"
    })

    const addInterest = () => {
        append({
            key : "",
            value : ""
        })
    }

    const removeAt = (index : number) => {
        remove(index)
        if(getValues().items.length === 0) {
            addInterest()
        }
    }

    return (
        <>
            <h1 className="text-2xl">Dynamic Form</h1>
            <form onSubmit={handleSubmit(setResult)}>
                <div className="mb-3">
                    <Label>Name</Label>
                    <TextInput {...register('name', {
                        required : "Please enter name"
                    })} />
                    <FieldError message={errors.name?.message} />
                </div>

                {fields.map((field, index) => 
                    <div key={field.id} className="mb-2">
                        <div className="flex gap-2">
                            <div>
                                {index == 0 && <Label>Key Name</Label>}
                                <TextInput {...register(`items.${index}.key`, {
                                    required : "Please enter key name"
                                })} />
                                <FieldError message={errors.items?.[index]?.key?.message} />
                            </div>
                            <div className="flex-grow">
                                {index == 0 && <Label>Value</Label>}
                                <div className="flex gap-1">
                                    <TextInput {...register(`items.${index}.value`, {
                                        required : "Please enter value"
                                    })} className="flex-grow" />
                                    <Button onClick={() => removeAt(index)}>
                                        <div className="flex items-center">
                                            <PiTrash /> 
                                        </div>
                                    </Button>
                                </div>
                                <FieldError message={errors.items?.[index]?.value?.message} />
                            </div>
                        </div>
                    </div>
                )}

                <div className="flex gap-2 pt-2">
                    <Button onClick={addInterest}>
                        <div className="flex gap-1 items-center">
                            <PiPlus /> Add One
                        </div>
                    </Button>

                    <Button type="submit">
                        <div className="flex gap-1 items-center">
                            <BiSend /> Submit
                        </div>
                    </Button>

                </div>
            </form>
        </>
    )
}