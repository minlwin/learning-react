import { SectionForm } from "../dto/input/section-form";
import { SectionSearch } from "../dto/input/section-search";
import { SectionDetails } from "../dto/output/section-details";
import { SectionInfo } from "../dto/output/section-info";
import { client } from "./client-factory";

export const searchSection = async (search:SectionSearch) => 
    (await client.get<SectionInfo[]>('/section', {params: search})).data

export const findSectionById = async (id:number) => 
    (await client.get<SectionDetails>(`/section/${id}`)).data

export const createSection = async (form:SectionForm) => 
    (await client.post<SectionDetails>(`/section`, form)).data

export const updateSection = async (id:number, form:SectionForm) => 
    (await client.put<SectionDetails>(`/section/${id}`, form)).data