import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { getRegionById, type Region } from "../../client/location-client"
import Card from "../../ui/cards"

export default function RegionDetails() {
    const {id} = useParams()
    const [region, setRegion] = useState<Region | undefined>(undefined)

    useEffect(() => {
        async function load() {
            if(id) {
                const result = await getRegionById(id)
                setRegion(result)
            }
        }

        load()
    }, [id])

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