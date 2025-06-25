import { sayHello } from "./hello"

test("Hello TypeScript Test", () => {
    expect(sayHello("JDC")).toBe("Hello JDC")
})