test("Check Array or Not", () => {
    // Test Array
    expect(Array.isArray([1, 2, 3])).toBe(true)
    // Test Not Array
    expect(Array.isArray({length : 0})).toBe(false)
})