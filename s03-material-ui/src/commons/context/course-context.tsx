type CourseForm = {
    name: string
    level: string
    description: string
    deleted:boolean
}

type Course = {
    id:number
} & CourseForm

