import { getDay } from "./index-access"

test('Accessing Element Index Success', () => {
    expect(getDay(0)).toBe('MON')
    expect(getDay(1)).toBe('TUE')
    expect(getDay(2)).toBe('WED')
    expect(getDay(3)).toBe('THU')
    expect(getDay(4)).toBe('FRI')
    expect(getDay(5)).toBe('SAT')
    expect(getDay(6)).toBe('SUN')
})

test('Accessing Element with out of index', () => {
    expect(getDay(7)).toBe(undefined)
})