import { useEffect, useState } from "react"
import { User } from "./models"
import { v4 as uuid } from "uuid"
import FormGroup from "@/components/forms/form-group"

export const Form3 = () => {

    const [users, setUsers] = useState<Partial<User>[]>([])
    const addUser:(user:Partial<User>) => void = user => setUsers(prev => [...prev, user])

    return (
        <>
            <h1 className="text-xl">Form and List</h1>
    
            <div className="py-4">
                <EditForm addUser={addUser}/>
            </div>
    
            <h1 className="text-lg mb-3">User List</h1>
    
            <UserList list={users}/>
        </>
    )
}

const EditForm = ({addUser} : {addUser: (user:Partial<User>) => void}) => {
    
    const [user, setUser] = useState<Partial<User>>({})
    const [errors, setErrors] = useState<Partial<User>>({})
    const hasError = errors.name || errors.dob || errors.gender || errors.phone || errors.email

    const onSubmit = () => {
        if(!hasError) {
            addUser({... user, id: uuid()})
            setUser({name: '', phone: '', email: '', gender: '', dob: ''})
        }
    }

    const setName = (value:string) => setUser(prev => ({...prev, name : value}))
    const setPhone = (value:string) => setUser(prev => ({...prev, phone : value}))
    const setEmail = (value:string) => setUser(prev => ({...prev, email : value}))
    const setGender = (value:string) => setUser(prev => ({...prev, gender : value}))
    const setDob = (value:string) => setUser(prev => ({...prev, dob : value}))

    useEffect(() => {
        console.log(user)
        var validationError:Partial<User> = {}
        validationError.name = user.name ? "" : "Please enter name."
        validationError.phone = user.phone ? "" : "Please enter phone."
        validationError.email = user.email ? "" : "Please enter email."
        validationError.gender = user.gender ? "" : "Please select gender."
        validationError.dob = user.dob ? "" : "Please enter date of birth."
        setErrors(validationError)
    }, [user])

    return (
        <form action={onSubmit} className="grid grid-cols-3 gap-4">
            <FormGroup label="Name">
                <input value={user.name} onChange={e => setName(e.target.value)} className="form-control" type="text" placeholder="Enter User Name" />
                {errors.name && <span className="text-red-500">{errors.name}</span>}
            </FormGroup>

            <FormGroup label="Phone">
                <input value={user.phone} onChange={e => setPhone(e.target.value)} name="phone" className="form-control" type="tel" placeholder="Enter Phone Number" />
                {errors.phone && <span className="text-red-500">{errors.phone}</span>}
            </FormGroup>

            <FormGroup label="Email">
                <input value={user.email} onChange={e => setEmail(e.target.value)} name="email" className="form-control" type="email" placeholder="Enter Email Address" />
                {errors.email && <span className="text-red-500">{errors.email}</span>}
            </FormGroup>

            <FormGroup label="Gender">
                <select value={user.gender} onChange={e => setGender(e.target.value)} name="gender" className="form-select">
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                {errors.gender && <span className="text-red-500">{errors.gender}</span>}
            </FormGroup>

            <FormGroup label="Date of Birth">
                <input value={user.dob} onChange={e => setDob(e.target.value)} name="dob" className="form-control" type="date"  />
                {errors.dob && <span className="text-red-500">{errors.dob}</span>}
            </FormGroup>

            <span></span>

            <button type="submit" className="outline-btn w-1/2">
                Add User
            </button>

        </form>
    )
}

const UserList = ({list}:{list:Partial<User>[]}) => (
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
            {list.map(user => <tr className="border-2 border-collapse">
                <td className="text-start p-2">{user.name}</td>
                <td className="text-start p-2">{user.dob}</td>
                <td className="text-start p-2">{user.gender}</td>
                <td className="text-start p-2">{user.phone}</td>
                <td className="text-start p-2">{user.email}</td>
            </tr>)}
        </tbody>
    </table>
)