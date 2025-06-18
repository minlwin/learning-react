import { useEffect, useRef, useState } from "react"
import { useParams } from "react-router"
import { getRegionById, type Region } from "../../client/location-client"
import Card from "../../ui/cards"

export default function RegionDetails() {
    const {id} = useParams()
    const idvalue = useRef(id)
    const [region, setRegion] = useState<Region | undefined>(undefined)

    useEffect(() => {
        async function load() {
            if(idvalue.current) {
                const result = await getRegionById(idvalue.current)
                setRegion(result)
            }
        }

        load()
    }, [idvalue])

    return (
        <>
            <h3 className="mb-4">Region Details</h3>

            {region && 
                <Card>
                    {region.name}
                </Card>
            }
        </>
    )
}