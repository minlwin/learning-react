export interface RegionDto {
    readonly id:number
    readonly name:string
}

export interface DistrictDto {
    readonly id:number
    readonly name:string
    readonly region:RegionDto
}

export interface TownshipDto {
    readonly id:number
    readonly name:string
    readonly district:DistrictDto
}