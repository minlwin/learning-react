import { CourseForm } from "../dto/input/course-form"
import { CourseSearch } from "../dto/input/course-search"
import { CourseDetails } from "../dto/output/course-details"
import { CourseInfo } from "../dto/output/course-info"
import { client } from "./client-factory"

export const searchCourse = async (search?:CourseSearch) => 
    (await client.get<CourseInfo[]>('/course', {params: search})).data


export const findCourseById = async (id:number) => 
    (await client.get<CourseDetails>(`/course/${id}`)).data

export const createCourse = async (form:CourseForm) => 
    (await client.post<CourseDetails>('/course', form)).data

export const updateCourse = async (id:number, form:CourseForm) => 
    (await client.put<CourseDetails>(`/course/${id}`, form)).data
