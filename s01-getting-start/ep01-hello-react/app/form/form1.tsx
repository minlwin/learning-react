"use client"

import FormGroup from "@/components/forms/form-group";
import JsonViewer from "@/components/json-viewer";
import { useState } from "react";

export default function Form1() {

    const [model, setModel] = useState<FormModel>({text: "", date: "", select : ""})

    function setText(value:string) {
        const {... data} = model
        data.text = value
        setModel(data)
    }

    function setDate(value:string) {
        const {... data} = model
        data.date = value
        setModel(data)
    }

    function setSelect(value:string) {
        const {... data} = model
        data.select = value
        setModel(data)
    }

    return (
        <>
            <h1 className="text-xl">Using Form Inputs</h1>

            <form className="mt-4 flex gap-8">
                <div className="flex-1 flex flex-col gap-6">
                    <FormGroup label="Text Input">
                        <input value={model.text} onChange={e => setText(e.target.value)} type="text" placeholder="Enter Text" className="form-control" />
                    </FormGroup>
                    <FormGroup label="Date Input">
                        <input value={model.date} onChange={e => setDate(e.target.value)} type="date" className="form-control" />
                    </FormGroup>
                    <FormGroup label="Select">
                        <select value={model.select} onChange={e => setSelect(e.target.value)} className="form-select">
                            <option value="">Select One</option>
                            <option value="Weekend">Weekend</option>
                            <option value="Weekend">Weekdays</option>
                            <option value="Weekend">Online</option>
                        </select>
                    </FormGroup>
                </div>

                <div className="flex-1">
                    <h1 className="mb-3">Form Value</h1>
                    <JsonViewer data={model} />
                </div>
            </form>
        </>
    )
}

interface FormModel {
    text:string 
    date:string 
    select:string
}