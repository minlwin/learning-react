import { useEffect, useState } from "react"
import { getRegions, type Region } from "../../client/location-client"
import Card from "../../ui/cards"
import { useNavigate } from "react-router"

export default function Regions() {

    const [regions, setRegions] = useState<Region[]>([])
    const navigate = useNavigate()

    useEffect(() => {
        async function load() {
            const result = await getRegions()
            console.log(result)
            setRegions(result) 
        }

        load()
    }, [])

    return (
        <>
            <h3 className="mb-4">Region List</h3>

            {regions.map(region => 
                <Card key={region.id} bottom={true}>
                    <h5 className="card-card-title" onClick={() => navigate(`/regions/${region.id}`)}>{region.id} {region.name}</h5>
                </Card>
            )}
        </>
    )
}