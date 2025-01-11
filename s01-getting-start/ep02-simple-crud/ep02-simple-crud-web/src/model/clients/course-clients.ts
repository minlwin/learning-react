import axios from "axios";
import { CourseDetails, CourseForm, CourseInfo, CourseSearch } from "../index";

const client = axios.create({baseURL: 'http://localhost:8080'})

export async function searchCourse(form:CourseSearch) {
    return (await client.get<CourseInfo[]>("/course", {params: form})).data
}

export async function findCourse(id:any) {
    return (await client.get<CourseDetails>(`/course/${id}`)).data
}

export async function createCourse(form:CourseForm) {
    return (await client.post<CourseDetails>('/course', form)).data
}

export async function updateCourse(id:any, form:CourseForm) {
    return (await client.put<CourseDetails>(`/course/${id}`, form)).data
}

