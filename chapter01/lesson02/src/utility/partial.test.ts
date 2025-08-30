import { updateUser, User } from "./partial"

test("Using Partial Test", () => {
    const user:User = {
        id: 1,
        name: "Aung Aung",
        phone: "091818171",
        email: "aung@gmail.com"
    }

    const result = updateUser(user, {phone: "0917171717"})
    expect(result).toEqual({
        id: 1,
        name: "Aung Aung",
        phone: "0917171717",
        email: "aung@gmail.com"
    })
})