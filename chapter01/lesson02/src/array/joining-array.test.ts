test("Joining Array Test", () => {
    // Input
    const array = [1, 2, 3, 4]

    // Join Array
    const result = array.join()

    // Check Result
    expect(result).toBe("1,2,3,4")
})

test("Joining Array with Separator Test", () => {
    // Input
    const array = [1, 2, 3, 4]

    // Join Array
    const result = array.join("-")

    // Check Result
    expect(result).toBe("1-2-3-4")
})

test("Array to String Test", () => {
    // Input
    const array = [1, 2, 3, 4]

    // Join Array
    const result = array.toString()

    // Check Result
    expect(result).toBe("1,2,3,4")
})