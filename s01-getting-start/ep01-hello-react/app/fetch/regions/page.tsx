"use client"

import { useEffect, useState } from "react"

import PageTitle from "@/components/page-title"
import { RegionDto } from "../model"
import axios from 'axios'
import Card from "@/components/card"
import { useRouter } from "next/navigation"

export default function Regions() {
    
    const [regions, setRegions] = useState<RegionDto[]>([])

    const fetchRegions = async ():Promise<RegionDto[]> => {
        return (await axios.get('http://localhost:8080/locations/regions')).data
    }

    useEffect(() => {
        fetchRegions().then(result => setRegions(result))
    }, [])

    return (
        <>
            <PageTitle title="Region of Myanmar" />

            <div className="mt-4 grid grid-cols-3 gap-4">
                {regions.map(region => <Region key={region.id} region={region} />)}
            </div>
        </>
    )
}

const Region = ({region}: {region:RegionDto}) => {
    const router = useRouter()
    const showDistrict = (regionId:number) => router.push(`/fetch/districts/${regionId}?name=${region.name}`)

    return (
        <div onClick={() => showDistrict(region.id)}>
            <Card>
                <span className="inline-block w-1/6">{region.id}</span>
                {region.name}
            </Card>
        </div>
    )
}