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

}

export type ClassType = 'Campus' | 'Online'
export const classTypes:ClassType[] = ['Campus', 'Online']

