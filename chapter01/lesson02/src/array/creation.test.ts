test("Array Creation", () => {
    // Expression
    let array:number[] = [1, 2, 3]
    // Verify array state
    expect(array).toEqual([1, 2, 3])

    // Array Constructor
    array = new Array(3)
    // Verify array state
    expect(array).toEqual([undefined, undefined, undefined])

    // Array.of() factory function
    array = Array.of(1, 2, 3, 4, 5)
    // Verify array state
    expect(array).toEqual([1, 2, 3, 4, 5])

    // Array.from() factory function
    array = Array.from({length : 3}, (_, i) => i + 1)
    // Verify array state
    expect(array).toEqual([1, 2, 3])
})