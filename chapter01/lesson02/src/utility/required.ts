type LoginForm = {
    username?: string
    password?: string
}

// OK
const form:LoginForm = {username: "thidar"}

// Error :
// All properties from LoginForm are required
// const requiredForm:Required<LoginForm> = {username: "thidar"}