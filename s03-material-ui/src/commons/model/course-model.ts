export const COURSE_LEVELS = [
    "Basic", "Intermediate", "Advance"
]

export type CourseForm = {
    name: string
    level: string
    description: string
    deleted:boolean
}

export type Course = {
    id:number
} & CourseForm

export type CourseModel = Map<number, Course>
