import { SectionInfo } from "./section-info"

export interface CourseDetails {
    id: number
    name: string
    level: string
    fees: number
    description?: string
    sections: SectionInfo []
}