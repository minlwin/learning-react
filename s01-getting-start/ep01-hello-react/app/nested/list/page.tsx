"use client"

import PageTitle from "@/components/page-title";
import { useUsers } from "../layout";
import Card from "@/components/card";
import { User } from "../../form/models";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NestedRouting() {

    const users = useUsers()

    return (
        <>
            <div className="flex justify-between">
                <PageTitle title="User List" />

                <Link href={'/nested/edit'} className="outline-btn">Add New User</Link>
            </div>

            <div className="pt-4">
                {users.length == 0 ? 
                    <NoUser /> : 
                    <UserList list={users} />}
                
            </div>
        </>
    )
}

const NoUser = () => <Card>There is no user. Please add new user.</Card>

const UserList = ({list}:{list:Partial<User>[]}) => {
    
    const router = useRouter()
    const navigate = (id?:string) => {
        if(id) {
            router.push(`/nested/details/${id}`)
        }
    }

    return (
        <table className="table table-fixed w-full border-2 border-collapse">
            <thead>
                <tr className="border-2 border-collapse">
                    <th className="text-start p-2">Name</th>
                    <th className="text-start p-2">Date of Birth</th>
                    <th className="text-start p-2">Gender</th>
                    <th className="text-start p-2">Phone</th>
                    <th className="text-start p-2">Email</th>
                </tr>
            </thead>
            <tbody>
                {list.map(user => <tr key={user.id} onClick={() => navigate(user.id)} className="border-2 border-collapse">
                    <td className="text-start p-2">{user.name}</td>
                    <td className="text-start p-2">{user.dob}</td>
                    <td className="text-start p-2">{user.gender}</td>
                    <td className="text-start p-2">{user.phone}</td>
                    <td className="text-start p-2">{user.email}</td>
                </tr>)}
            </tbody>
        </table>
    )
}