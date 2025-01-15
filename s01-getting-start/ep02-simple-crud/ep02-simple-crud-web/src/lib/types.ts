import React from "react"

export type Children = Readonly<{
    children: React.ReactNode
}>

export type CourseLevel = 'Basic' | 'Intermediate' | 'Advance'
export const courseLevels:CourseLevel[] = ['Basic', 'Intermediate', 'Advance']

export type CourseInfo = {
    id:number
    name:string
    level:CourseLevel
    fees:number
    description?:string
}

export type CourseDetails = {
    id:number
    name:string
    level:CourseLevel
    fees:number
    description?:string
    sections: SectionInfo[]
}

export type ClassType = 'Campus' | 'Online'
export const classTypes:ClassType[] = ['Campus', 'Online']

export type SectionInfo = {
    id:number
    courseName:number
    courseLevel:string
    type:ClassType
    fees:number
    months:number
    startAt:string
}

export type SectionDetails = {
    id:number
    courseId:number
    courseName:number
    courseLevel:string
    type:ClassType
    fees:number
    months:number
    days:string[]
    startAt:string
    startTime:string
    endTime:string
}