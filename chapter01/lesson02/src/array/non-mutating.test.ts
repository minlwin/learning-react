test("Slice with from index test", () => {

    // Array to test
    const array = Array.from({length : 10}, (_, index) => index)
    // Original array for verifying
    const clonedArray = [...array]

    // Execute slice method
    const slicedFrom2 = array.slice(2)

    // Verify Result
    expect(slicedFrom2).toEqual([2, 3, 4, 5, 6, 7, 8, 9])
    // Verify that orignal doesn't change
    expect(array).toEqual(clonedArray)
})

test("Slice with from and to index test", () => {

    // Array to test
    const array = Array.from({length : 10}, (_, index) => index)
    // Original array for verifying
    const clonedArray = [...array]

    // Execute slice method
    const slicedFrom2 = array.slice(2, 5)

    // Verify Result
    expect(slicedFrom2).toEqual([2, 3, 4])
    // Verify that orignal doesn't change
    expect(array).toEqual(clonedArray)
})

test("Concatinating array with rest elements", () => {
    // Array to test
    const array = Array.from({length : 3}, (_, index) => index + 1)
    // Original array for verifying
    const clonedArray = [...array]

    const concatedByRests = array.concat(1, 2, 3)
    // Verify Result
    expect(concatedByRests).toEqual([1, 2, 3, 1, 2, 3])
    // Verify that orignal doesn't change
    expect(array).toEqual(clonedArray)
})

test("Concatinating array with other array", () => {
    // Create array for test
    const array = Array.from({length : 3}, (_, index) => index + 1)
    // Clone array for verify
    const clonedArray = [...array]

    // Execute concat method
    const result = array.concat([4, 5, 6])

    // Verify Result
    expect(result).toEqual([1, 2, 3, 4, 5, 6])
    // Verify Original array doesn't change
    expect(array).toEqual(clonedArray)
})

test("Filtering Array Element", () => {
    // Create array
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const original = [...array]

    // Element is Even Number
    const result = array.filter(element => element % 2 == 0)

    // Verify Result
    expect(result).toEqual([2, 4, 6, 8])

    // Verify that array doesn't change
    expect(array).toEqual(original)
})

test("Mapping Array Elements", () => {
    // Create array
    const array = [1, 2, 3, 4, 5]
    const original = [...array]

    // Mapping elements
    const result = array.map(element => element * 2)

    // Verify Result
    expect(result).toEqual([2, 4, 6, 8, 10])

    // Verify that array doesn't change
    expect(array).toEqual(original)
})

test("Flattening Array Elements", () => {
    // Create array
    const array = [[1], [2, 3], [4, 5]]
    const original = [...array]

    // Execute flat method
    const result = original.flat()

    // Verify Result
    expect(result).toEqual([1, 2, 3, 4, 5])
    // Verify that array doesn't change
    expect(array).toEqual(original)
})

test("Flattening and mapping Array Elements", () => {
    // Create array
    const array = [[1], [2, 3], [4, 5]]
    const original = [...array]

    // Flat & Map
    const result = original.flatMap(element => element.map(a => a * 2))

    // Verify Result
    expect(result).toEqual([2, 4, 6, 8, 10])
    // Verify that array doesn't change
    expect(array).toEqual(original)
})