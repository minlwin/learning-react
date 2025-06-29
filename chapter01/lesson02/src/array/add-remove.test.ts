test("Adding Elements to an array", () => {
    // Declare an array
    const deque:number[] = []

    // Add an element to the end (like a stack push)
    deque.push(1)

    // Add an element to the front (like a queue unshift)
    deque.unshift(9)
    
    // Verify the result
    expect(deque).toEqual([9, 1])
})

test("Removing elements from an array", () => {
    // Declare an array 
    const deque = [1, 2, 3, 4, 5]

    // Removing element from the end
    const lastElement = deque.pop()

    // Verify last element and new state of array
    expect(lastElement).toBe(5)
    expect(deque).toEqual([1, 2, 3, 4])

    // Remove element from the start
    const firstElement = deque.shift()

    // Verify last element and new state of array
    expect(firstElement).toBe(1)
    expect(deque).toEqual([2, 3, 4])
})

test("Delete elements from an array", () => {

    // Declare an array
    const array = [1, 2, 3, 4, 5]

    // delete 2 elements from index 1
    array.splice(1, 2)

    // Verify array state
    expect(array).toEqual([1, 4, 5])
})

test("Insert elements to an array", () => {
    // Declare an array
    const array = [1, 2, 3, 4, 5]

    // Insert 10, 11 from index 1
    array.splice(1, 0, 10, 11)

    // Verify array state
    expect(array).toEqual([1, 10, 11, 2, 3, 4, 5])
})

test("Replace elements to an array", () => {
    // Declare an array
    const array = [1, 2, 3, 4, 5]

    // Delete 2 elements form index 1 and insert 10, 11 from index 1
    array.splice(1, 2, 10, 11)

    // Verify array state
    expect(array).toEqual([1, 10, 11, 4, 5])
})