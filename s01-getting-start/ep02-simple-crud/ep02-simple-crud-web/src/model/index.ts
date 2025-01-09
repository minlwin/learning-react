export type Level = '' | 'Basic' | 'Intermediate' | 'Advance'
export const Levels:Level[] = ['Basic', 'Intermediate', 'Advance'] 

export type CourseSearch = {
    level? : Level
    keyword? : string
}

export type CourseInfo = {

}

export type CourseDetails = {
    
}