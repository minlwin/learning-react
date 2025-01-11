export type Level = 'Basic' | 'Intermediate' | 'Advance'
export const Levels:Level[] = ['Basic', 'Intermediate', 'Advance'] 

export type SectionType = 'Campus' | 'Online'
export const SectionTypes:SectionType[] = ['Campus', 'Online']

export type DayOfWeek = 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY'
export const DayOfWeeks:DayOfWeek[] = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'] 

export type CourseSearch = {
    level? : Level
    keyword? : string
}

export type CourseForm = {
    name: string
    level: Level
    fees: number
    description?: string
}

export type CourseInfo = {
    id: number
    name: string
    level: Level
    fees: number
    description?: string
}

export type CourseDetails = {
    id: number
    name: string
    level: Level
    fees: number
    description?: string
    sections?: SectionInfo[] 
}

export type SectionSearch = {
    type?:SectionType,
    level?:Level,
    startFrom?:string,
    startTo?:string,
    keyword?:string    
}

export type SectionForm = {
    courseId: number
    startDate: string
    type: SectionType
    fees: number
    months: number
    days: DayOfWeek[]
    startTime: string
    endTime: string
}

export type SectionInfo = {

}

export type SectionDeatils = {

}

export type Children = {
    children: Readonly<React.ReactNode>
}