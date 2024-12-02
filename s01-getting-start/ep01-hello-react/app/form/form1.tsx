import FormGroup from "@/components/forms/form-group";
import JsonViewer from "@/components/json-viewer";
import { useState } from "react";
import { FormModel } from "./models";

export const Form1 = () => {

    const [model, setModel] = useState<FormModel>({text: "", date: "", select : ""})

    const setText = (value:string) => setModel(prev => ({...prev, text: value}))
    const setDate = (value:string) => setModel(prev => ({...prev, date: value}))
    const setSelect = (value:string) => setModel(prev => ({...prev, select: value}))

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
                            <option value="Weekdays">Weekdays</option>
                            <option value="Online">Online</option>
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
