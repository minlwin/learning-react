import axios from 'axios'
import { BASE_API } from ".";
import { CourseInfo } from '@/lib/types';

export async function useCourseSearch(form:any) {
    return (await axios.get<CourseInfo[]>(`${BASE_API}/course`, {params: form})).data
}

export async function useCourseCreate(form:any) {
    return (await axios.post<CourseInfo>(`${BASE_API}/course`, form)).data
}