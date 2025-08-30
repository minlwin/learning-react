type User = {
    name: string
    phone: string
    email: string
}

const user:User = {
    name: "Aung Aung",
    phone: "0917181716",
    email: "aung@gmail.com"
}

// Properties of user can modify by default
user.name = "Thidar"

const readOnlyUser:Readonly<User> = user

// Error : 
// Cannot assign to 'name' because it is a read-only property.ts(2540)
// readOnlyUser.name = "Some Name"