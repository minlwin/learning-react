import { Card } from "flowbite-react";

export default function NoData({message} : {message? : string}) {
    return (
        <Card>
            {message ? message : "There is no data"}
        </Card>
    )
}