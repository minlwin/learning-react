test("Reducing Test", () => {
    // Array To Reduce
    const array:string[] = ["1", "2", "3", "4"]
    
    // Reducing Array
    const result = array.reduce((prev, current) => prev + current)

    // Check Result
    expect(result).toBe("1234")
})

test("Reducing Array from Right Side", () => {
     // Array To Reduce
    const array:string[] = ["1", "2", "3", "4"]
    
    // Reducing Array
    const result = array.reduceRight((prev, current) => prev + current)

    // Check Result
    expect(result).toBe("4321")   
})