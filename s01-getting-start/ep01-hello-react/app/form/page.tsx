"use client"

import Card from "@/components/card"
import PageTitle from "@/components/page-title"
import { useState } from "react"
import { Form1 } from "./form1"
import { Form2 } from "./form2"
import { Form3 } from "./form3"

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
                <TabButton id="form3" name="Form and List" onClick={nextTab} active={tab === 'form3'} />
            </div>

            <Card className="flex-grow">
                {tab === 'form1' && <Form1 />}
                {tab === 'form2' && <Form2 />}
                {tab === 'form3' && <Form3 />}
            </Card>
        </div>
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