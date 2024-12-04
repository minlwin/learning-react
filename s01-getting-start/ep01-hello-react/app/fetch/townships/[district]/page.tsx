"use client"

import Card from "@/components/card"
import { TownshipDto } from "../../model"
import { useParams, useSearchParams } from "next/navigation"

import axios from 'axios'
import { useEffect, useState } from "react"
import PageTitle from "@/components/page-title"
import BackLink from "@/components/back-link"

export default function Townships() {

    const {district} = useParams()
    const searchParam = useSearchParams()
    const name = searchParam.get('name')

    const [townships, setTownships] = useState<TownshipDto[]>([])
    const fetchTownships = async ():Promise<TownshipDto[]> => (await axios.get(`http://localhost:8080/locations/townships/${district}`)).data

    useEffect(() => {
        fetchTownships().then(result => setTownships(result))
    }, [])

    return (
        <>
            <div className="flex justify-between">
                <PageTitle title={`District for ${name}`} /> 
                <BackLink name={name || 'District'} />
            </div>

            <div className="mt-4 grid grid-cols-3 gap-4">
                {townships.map(item => <TownshipView key={item.id} item={item} />)}
            </div>
        </>
    )
}

const TownshipView = ({item}: {item:TownshipDto}) => (
    <Card>
        <span className="inline-block w-1/6">{item.id}</span>
        {item.name}
    </Card>
)