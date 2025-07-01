test("Find first element in an array", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 1, 3]

    // Find First Even Element
    let firstEven = array.find(a => a % 2 == 0)

    // Verify Result
    expect(firstEven).toBe(2)
})

test("Find first index in an array", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 1, 3]

    // Find First Even Element
    var firstEven = array.findIndex(a => a % 2 == 0)

    // Verify Result
    expect(firstEven).toBe(1)
})

test("Find first index of an element", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 1, 3]

    // Find first index of 3
    let firstIndex = array.indexOf(3)

    // Verify Result
    expect(firstIndex).toBe(2)
})

test("Find last index of an element", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 1, 3]

    // Find first index of 3
    let lastIndex = array.lastIndexOf(3)

    // Verify Result
    expect(lastIndex).toBe(8)
})

test("Contains or Not", () => {
    const array = [1, 2, 3, 4, 5]

    // Check 1 contains in array
    let result = array.includes(1)
    // Verify Result
    expect(result).toBe(true)

    // Check 1 contains in array from index 1
    result = array.includes(1, 1)
    // Verify Result
    expect(result).toBe(false)
})

test("Some Match Condition", () => {
    // Define match array
    const matchArray = [1, 2, 3, 4]

    // Check some element is divided by 3
    let result = matchArray.some(a => a % 3 == 0)
    // Verify Result
    expect(result).toBe(true)

    // Define unmatched array
    const unMatchArray = [1, 2, 4]
    
    // Check some element is divided by 3
    result = unMatchArray.some(a => a % 3 == 0)
    // Verify Result
    expect(result).toBe(false)
})

test("All match condition", () => {
    // Define match array
    const matchArray = [3, 6, 9]

    // Check every element is divided by 3
    let result = matchArray.every(a => a % 3 == 0)
    // Verify Result
    expect(result).toBe(true)

    // Define unmatched array
    const unMatchArray = [1, 2, 3]
    
    // Check every element is divided by 3
    result = unMatchArray.every(a => a % 3 == 0)
    // Verify Result
    expect(result).toBe(false)
})