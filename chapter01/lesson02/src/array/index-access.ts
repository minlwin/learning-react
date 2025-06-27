// Define an array
const DAY_OF_WEEKS:string[] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']

export function getDay(index:number):string {
    // Accessing Element with index
    return DAY_OF_WEEKS[index]
}