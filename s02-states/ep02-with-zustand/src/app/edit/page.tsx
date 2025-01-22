'use client'
import ErrorMessage from "@/components/ui/error-message";
import FormGroup from "@/components/ui/form-group";
import RoundedIconLink from "@/components/ui/rounded-icon-button";
import TopPage from "@/components/ui/top-page";
import { ProductForm, useProductStore } from "@/stores/product-store";
import { Button, Modal, TextInput } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { PiCheck, PiList, PiPencil, PiPlus } from "react-icons/pi";

export default function ProductEdit() {

    const { 
        register, handleSubmit, formState : { errors }
    } = useForm<ProductForm>({
        defaultValues : {
            name: '',
            category : '',
            price : 0
        }
    })

    const router = useRouter()
    const { add } = useProductStore()
    const [show, setShow] = useState(false)
    const [newField, setNewField] = useState<{fieldName : string, label : string}[]>([])

    const addNewField = (form : {fieldName : string, label : string}) => {
        register(form.fieldName)
        setNewField([...newField, form])
        setShow(false)
    }

    const addNewProduct = (FormData : ProductForm) => {
        add(FormData)
        router.push('/')
    }

    return (
      <TopPage title="Edit Product" icon={<PiPencil />} 
            action={<RoundedIconLink href="/"><PiList /></RoundedIconLink>} >

        <form onSubmit={handleSubmit(addNewProduct)} >
            <div className="grid grid-cols-4 gap-4">
                <FormGroup label="Name" className="col-span-2">
                    <TextInput placeholder="Enter product name" {...register('name', {
                        required : "Please enter product name."
                    })} />
                    <ErrorMessage message={errors.name?.message} />
                </FormGroup>

                <FormGroup label="Category" className="col-start-1">
                    <TextInput placeholder="Enter category name" {...register('category', {
                        required : 'Please enter category.'
                    })} />
                    <ErrorMessage message={errors.category?.message} />
                </FormGroup>

                <FormGroup label="Price">
                    <TextInput type="number" {...register('price', {
                        required : 'Please enter price.'
                    })} />
                    <ErrorMessage message={errors.price?.message} />
                </FormGroup>

                {newField.map(field => (
                    <FormGroup key={field.fieldName} label={field.label} className="col-start-1 col-span-2">
                        <TextInput placeholder={`Please enter ${field.label}`} {...register(field.fieldName, {
                            required : `Please enter ${field.fieldName}`
                        })} />
                        <ErrorMessage message={errors[field.fieldName]?.message as string | undefined} />
                    </FormGroup>
                ))}
                
                <div className="col-start-1 col-span-full flex gap-2">
                    <Button onClick={() => setShow(true)} type="button">
                        <div className="flex items-center gap-2">
                            <PiPlus /> Add Properties
                        </div>
                    </Button>

                    <Button type="submit">
                        <div className="flex items-center gap-2">
                            <PiCheck /> Save Product
                        </div>
                    </Button>
                </div>
            </div>

        </form>

        <ItemForm show={show} addField={addNewField} closeModal={() => setShow(false)} />

      </TopPage>
    )
  }

function ItemForm({show, closeModal, addField} : {
    show : boolean,
    closeModal : () => void,
    addField : (form : {fieldName : string, label : string}) => void
}) {

    const {handleSubmit, register, reset, formState : {errors}} = useForm<{fieldName : string, label : string}>({
        defaultValues : {
            label : '',
            fieldName : ''
        }
    })

    return (
        <Modal show={show} onClose={closeModal}>
            <form onSubmit={handleSubmit(formData => {
                addField(formData)
                reset()
            })}>

                <Modal.Header>Add New Field to Product</Modal.Header>

                <Modal.Body>
                    <FormGroup label="Label" className="mb-3">
                        <TextInput placeholder="Enter field name" {...register('label', {
                            required : "Please enter field label."
                        })} />
                        <ErrorMessage message={errors.label?.message} />
                    </FormGroup>

                    <FormGroup label="Field Name" className="mb-3">
                        <TextInput placeholder="Enter field name" {...register('fieldName', {
                            required : "Please enter field name."
                        })} />
                        <ErrorMessage message={errors.fieldName?.message} />
                    </FormGroup>
                </Modal.Body>

                <Modal.Footer>
                    <Button type="submit">
                        <div className="flex items-center gap-2">
                            <PiPlus /> Add Field
                        </div>
                    </Button>
                </Modal.Footer>

            </form>
        </Modal>
    )
}