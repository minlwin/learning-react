import { isFalse } from "./falsy-demo";

test("undefined will be false", () => expect(isFalse(undefined)).toBe(true))
test("null will be false", () => expect(isFalse(null)).toBe(true))
test("Blank string will be false", () => expect(isFalse("")).toBe(true))
test("0 will be false", () => expect(isFalse(0)).toBe(true))
test("-0 will be false", () => expect(isFalse(-0)).toBe(true))
test("-0 will be false", () => expect(isFalse(0.0)).toBe(true))
test("NaN will be false", () => expect(isFalse(NaN)).toBe(true))
