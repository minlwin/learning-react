import { useEffect, useState } from "react"
import { getStates, type State } from "../../client/location-client"
import Card from "../../ui/cards"

export default function States() {

    const [states, setStates] = useState<State[]>([])

    useEffect(() => {
        async function load() {
            const result = await getStates()
            setStates(result)
        }

        load()
    }, [])

    return (
        <>
            <h3 className="mb-4">State List</h3>

            <div className="row row-cols-3 g-4">
                {states.map(state => 
                    <div className="col" key={state.id}>
                        <Card>
                            <h5 className="card-title">{state.name}</h5>
                        </Card>
                    </div>
                )}
            </div>
        </>
    )
}