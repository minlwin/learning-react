import axios from 'axios'
import { BASE_API } from ".";
import { CourseInfo } from '@/lib/types';

export async function useCourseSearch(form:any) {
    return (await axios.get<CourseInfo[]>(`${BASE_API}/course`, {params: form})).data
}

export async function useCourseDetails(id:number) {
    return (await axios.get<CourseInfo[]>(`${BASE_API}/course/${id}`)).data
}

export async function useCourseForEdit(id:number) {
    return (await axios.get<CourseInfo[]>(`${BASE_API}/course/${id}/edit`)).data
}

export async function useCourseCreate(form:any) {
    return (await axios.post<CourseInfo>(`${BASE_API}/course`, form)).data
}

export async function useCourseUpdate(id:number, form:any) {
    return (await axios.put<CourseInfo>(`${BASE_API}/course/${id}`, form)).data
}
