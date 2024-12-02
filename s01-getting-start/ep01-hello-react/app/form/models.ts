export interface FormModel {
    text:string 
    date:string 
    select:string
}

export interface User {
    id:string
    name:string
    phone:string
    email:string
    dob:string
    gender: 'Male' | 'Email' | string
}