import axios from "axios";

const instance = axios.create({
    baseURL : 'http://localhost:8080',
    timeout: 1000
})

export async function getRegions() {
    return (await instance.get<Region[]>('/regions')).data
}

export async function getRegionById(id : string) {
    return (await instance.get<Region>(`/regions/${id}`)).data
}

export async function getStates() {
    return (await instance.get<State[]>('/states')).data
}

export async function getStateById(id:string) {
    return (await instance.get<State>(`/states/${id}`)).data
}

export type Region = {
    id : number
    name : string
}

export type State = {
    id : number
    name : string
    state : State
    capital : string
}