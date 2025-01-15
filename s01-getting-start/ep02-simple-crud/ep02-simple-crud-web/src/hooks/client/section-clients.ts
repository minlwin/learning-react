import { SectionDetails, SectionInfo } from "@/lib/types";
import axios from "axios";
import { BASE_API } from ".";

export async function useSectionSearch(form: any) {
    return (await axios.get<SectionInfo[]>(`${BASE_API}/section`, {params: form})).data
}

export async function useSectionDetails(id: number) {
    return (await axios.get<SectionDetails>(`${BASE_API}/section/${id}`)).data
}

export async function useSectionCreate(form: any) {
    return (await axios.post<SectionInfo>(`${BASE_API}/section`, form)).data
}

export async function useSectionUpdate(id: number, form: any) {
    return (await axios.put<SectionInfo>(`${BASE_API}/section/${id}`, form)).data
}