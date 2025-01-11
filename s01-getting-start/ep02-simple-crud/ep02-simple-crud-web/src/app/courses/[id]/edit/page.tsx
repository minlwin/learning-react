'use client'
import { FormGroup } from "@/components/FormGroup";
import PageTitle from "@/components/PageTitle";
import { CourseForm, Levels } from "@/model";
import { createCourse } from "@/model/clients/course-clients";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BiSave } from "react-icons/bi";

export default function Page({params} : {params: Promise<{id:string}>}) {

    const [title, setTitle] = useState('Edit Course')
    const {id} = use(params)
    useEffect(() => setTitle(id === '0' ? 'Add New Course' : 'Edit Course'), [id])

    const router = useRouter()

    const {register, handleSubmit, formState: {errors}} = useForm<CourseForm>()
    const save = async (form:CourseForm) => {
        const result =  await createCourse(form)

        if(result.id) {
            router.push(`/courses/${result.id}/details`)
        }
    }

    return (
        <>
            <PageTitle title={title} />

            <form onSubmit={handleSubmit(save)} className="mt-3">

                <div className="flex gap-4 mb-4">
                    <FormGroup label="Course Name" className="w-1/3">
                        <input type="text" placeholder="Enter course name" {...register('name', {
                            required: "Please enter course name."
                        })} />
                        {errors.name && <span className="error">{errors.name.message}</span>}
                    </FormGroup>

                    <FormGroup label="Course Level" className="w-1/3">
                        <select {...register('level', {
                            required: "Please select course level."
                        })}>
                            <option value="">Select Course</option>
                            {Levels.map(item => <option key={item} value={item}>{item}</option> )}
                        </select>
                        {errors.level && <span className="error">{errors.level.message}</span>}
                    </FormGroup>

                    <FormGroup label="Fees" className="w-1/3">
                        <input type="number" placeholder="Enter fees for course" {...register('fees', {
                            required: "Please enter fees for course."
                        })} />
                        {errors.fees && <span className="error">{errors.fees.message}</span>}
                    </FormGroup>
                </div>

                <FormGroup label="Description" className="mb-4">
                    <textarea {...register('description')} placeholder="Enter Description"></textarea>
                </FormGroup>
                
                <button className="btn flex gap-2 items-center" type="submit">
                    <BiSave /> Save Course
                </button>
            </form>
        </>
    )
}