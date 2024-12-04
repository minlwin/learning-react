"use client"

import { useEffect, useState } from "react"
import { DistrictDto } from "../../model"
import axios from 'axios'
import PageTitle from "@/components/page-title"
import { useParams, useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"
import Card from "@/components/card"
import BackLink from "@/components/back-link"

export default function District() {

    const {region} = useParams()
    const searchParam = useSearchParams()
    const name = searchParam.get('name')

    const [districts, setDestricts] = useState<DistrictDto[]>([])
    const fetchDistricts = async ():Promise<DistrictDto[]> => (await axios.get(`http://localhost:8080/locations/districts/${region}`)).data

    useEffect(() => {
        fetchDistricts().then(result => setDestricts(result))
    }, [region])

    return (
        <>
            <div className="flex justify-between content-baseline">
                <PageTitle title={`District for ${name}`} /> 
                <BackLink name="Regions" />
            </div>

            <div className="mt-4 grid grid-cols-3 gap-4">
                {districts.map(item => <DistrictView key={item.id} item={item} />)}
            </div>
        </>
    )
}

const DistrictView = ({item}:{item:DistrictDto}) => {
    const router = useRouter()
    const showTownships = (id:number) => router.push(`/fetch/townships/${id}?name=${item.name}`)

    return (
        <div onClick={() => showTownships(item.id)}>
            <Card>
                <span className="inline-block w-1/6">{item.id}</span>
                {item.name}
            </Card>
        </div>
    )
}


