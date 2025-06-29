// Define an array
const DAY_OF_WEEKS:string[] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']

function getDay(index:number):string {
    // Accessing Element with index
    return DAY_OF_WEEKS[index]
}

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

test('Accessing Elements with Index', () => {
    // Array Declaration
    let numbers = Array.from({length : 5}, (_, index) => index + 1)

    // Verify array state
    expect(numbers).toEqual([1, 2, 3, 4, 5])

    // Get Element with index 0
    let firstElement = numbers[0]

    // Verify Result
    expect(firstElement).toBe(1)

    // Get Element with last index
    let lastElement = numbers[numbers.length - 1]
    // Verify Result
    expect(lastElement).toBe(5)

    // Set Element with Index Number
    numbers[0] = 10
    numbers[numbers.length - 1] = 0
    // Verify array state
    expect(numbers).toEqual([10, 2, 3, 4, 0])
})