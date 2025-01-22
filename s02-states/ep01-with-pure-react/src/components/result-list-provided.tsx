import { useUsers } from "@/states/users-provider"
import { Table } from "flowbite-react"
import { PiTrash } from "react-icons/pi"

export default function ResultList() {

    const {users, dispatch} = useUsers()
    const removeUer = (id: number) => dispatch({
        type : 'remove',
        id : id
    })

    return (
        <>
        {users.length > 0 && 
            <Table className="mt-4" striped>
                <Table.Head>
                    <Table.HeadCell>Id</Table.HeadCell>
                    <Table.HeadCell>Name</Table.HeadCell>
                    <Table.HeadCell>Phone</Table.HeadCell>
                    <Table.HeadCell>Email</Table.HeadCell>
                    <Table.HeadCell></Table.HeadCell>
                </Table.Head>

                <Table.Body>
                    {users.map(item => (
                        <Table.Row key={item.id}>
                            <Table.Cell>{item.id}</Table.Cell>
                            <Table.Cell>{item.name}</Table.Cell>
                            <Table.Cell>{item.phone}</Table.Cell>
                            <Table.Cell>{item.email}</Table.Cell>
                            <Table.Cell>
                                <PiTrash onClick={() => removeUer(item.id)} />
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        }
        </>
    )
}