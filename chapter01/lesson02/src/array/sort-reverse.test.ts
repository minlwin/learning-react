test("Natural Ordering Sort", () => {

    // Define an array
    const array = [3, 1, 4, 5, 9, 2]

    // Sorting 
    const result = array.sort()

    // Verify Result
    expect(result).toEqual([1, 2, 3, 4, 5, 9])
    // Verify Original array has been changed
    expect(array).toEqual([1, 2, 3, 4, 5, 9])
})

test("Custom Ordering Sort", () => {

    // Define an array
    const array = [3, 1, 4, 5, 9, 2]

    // Sorting 
    const result = array.sort((a, b) => b - a)

    // Verify Result
    expect(result).toEqual([9, 5, 4, 3, 2, 1])
    // Verify Original array has been changed
    expect(array).toEqual([9, 5, 4, 3, 2, 1])
})

test("Reversing an array", () => {
    // Define an array
    const array = [9, 5, 4, 3, 2, 1]

    // Reverse
    const result = array.reverse()

    // Verify Result
    expect(result).toEqual([1, 2, 3, 4, 5, 9])
    // Verify Original array has been changed
    expect(array).toEqual([1, 2, 3, 4, 5, 9])
})