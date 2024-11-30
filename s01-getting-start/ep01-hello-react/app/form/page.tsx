"use client"

import Card from "@/components/card"
import FormGroup from "@/components/forms/form-group"
import PageTitle from "@/components/page-title"
import { useState } from "react"

export default function UsingForm() {
    const [tab, setTab] = useState('form1')

    function nextTab(tabId:string) {
        setTab(tabId)
    }

    return (
        <div className="flex flex-col h-full">  
            <PageTitle title="Using Form Demo" />
            <div className="flex flex-row mt-4 mb-4">
                <TabButton id="form1" name="Form Input" onClick={nextTab} active={tab === 'form1'} />
                <TabButton id="form2" name="Form Validation" onClick={nextTab} active={tab === 'form2'} />
                <TabButton id="form3" name="Use Action State" onClick={nextTab} active={tab === 'form3'} />
            </div>

            <Card className="flex-grow">
                {tab === 'form1' && <Form1 />}
                {tab === 'form2' && <h1>Form 2</h1>}
                {tab === 'form3' && <h1>Form 3</h1>}
            </Card>
        </div>
    )
}

function Form1() {
    return (
        <>
            <h1 className="text-xl">Using Form Inputs</h1>

            <form className="mt-4 flex gap-8">
                <div className="flex-1 flex flex-col gap-6">
                    <FormGroup label="Text Input">
                        <input type="text" placeholder="Enter Text" className="form-control" />
                    </FormGroup>
                    <FormGroup label="Date Input">
                        <input type="date" className="form-control" />
                    </FormGroup>
                    <FormGroup label="Select">
                        <select className="form-select">
                            <option value="">Select One</option>
                        </select>
                    </FormGroup>
                </div>

                <div className="flex-1">
                    <h1>Form Value</h1>
                </div>
            </form>
        </>
    )
}

interface TabButtonProps {
    readonly id:string
    readonly name:string
    readonly onClick:(id:string)=>void
    readonly active:boolean
}

function TabButton({id, name, onClick, active}:TabButtonProps) {
    return (
        <button onClick={() => onClick(id)} 
            className={`${active ? 'outline-btn' : 'py-2 px-4'}`}>{name}</button>
    )
}