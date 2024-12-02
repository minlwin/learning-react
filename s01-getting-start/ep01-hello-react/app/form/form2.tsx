import { useEffect, useState } from "react"
import { FormModel } from "./form-model"
import JsonViewer from "@/components/json-viewer"
import FormGroup from "@/components/forms/form-group"

export default function Form2() {

    const [model, setModel] = useState<FormModel>({text: "", date: "", select : ""})
    const [error, setError] = useState<Partial<FormModel>>({})

    const setText = (value:string) => setModel(prev => ({...prev, text: value}))
    const setDate = (value:string) => setModel(prev => ({...prev, date: value}))
    const setSelect = (value:string) => setModel(prev => ({...prev, select: value}))

    useEffect(() => {
        const errors:Partial<FormModel> = {}
        if(!model.text) {
            errors.text = "Please enter text input."
        }

        if(!model.date) {
            errors.date = "Please select date input."
        }

        if(!model.select) {
            errors.select = "Please select one item."            
        }
        setError(errors)
    }, [model])
 
    return (
        <>
            <h1 className="text-xl">Form Validation</h1>
           <form className="mt-4 flex gap-8">
                <div className="flex-1 flex flex-col gap-6">
                    <FormGroup label="Text Input">
                        <input value={model.text} onChange={e => setText(e.target.value)} type="text" placeholder="Enter Text" className="form-control" />
                        {error.text && <span className="text-red-500">{error.text}</span>}
                    </FormGroup>
                    <FormGroup label="Date Input">
                        <input value={model.date} onChange={e => setDate(e.target.value)} type="date" className="form-control" />
                        {error.date && <span className="text-red-500">{error.date}</span>}
                    </FormGroup>
                    <FormGroup label="Select">
                        <select value={model.select} onChange={e => setSelect(e.target.value)} className="form-select">
                            <option value="">Select One</option>
                            <option value="Weekend">Weekend</option>
                            <option value="Weekdays">Weekdays</option>
                            <option value="Online">Online</option>
                        </select>
                        {error.select && <span className="text-red-500">{error.select}</span>}
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