const mod = require('./main');

test('Capitalize "hello" ', () => {
    expect(mod.capitalize("hello")).toBe("Hello");
})

test('Capitalize "123" ', () => {
    expect(mod.capitalize(123)).toBe(123);
})

test('Capitalize single character "b" ', () => {
    expect(mod.capitalize("b")).toBe("B");
})

test('Capitalize empty string', () => {
    expect(mod.capitalize("")).toBe("");
})

test('Reverse generic string', () => {
    expect(mod.reverseString("HelloWorld")).toBe("dlroWolleH");
})

test('Reverse single character', () => {
    expect(mod.reverseString("1")).toBe("1");
})

test('Reverse empty string', () => {
    expect(mod.reverseString("")).toBe("");
})

test('Throw error on number', () => {
    expect(() => mod.reverseString(123)).toThrow(TypeError);
})


test('Add two numbers', () => {
    expect(mod.calculator.add(4, 6)).toBe(10);
})

test('Subtract two numbers', () => {
    expect(mod.calculator.subtract(10, 12)).toBe(-2);
})

test('Multiply two numbers', () => {
    expect(mod.calculator.multiply(4, 6)).toBe(24);
})

test('Divide two numbers', () => {
    expect(mod.calculator.divide(12, 3)).toBe(4);
})

test('Error on divide by 0', () => {
    expect(() => mod.calculator.divide(12, 0)).toThrow(Error);
})

test('Error on wrong type', () => {
    expect(() => mod.calculator.divide(12, "0")).toThrow(TypeError);
})


test('Generic caesar cipher', () => {
    expect(mod.caesarCipher("hello", 2)).toBe("jgnnq");
})

test('Wrap-around caesar cipher', () => {
    expect(mod.caesarCipher("xyz", 3)).toBe("abc");
})

test('Case preservation', () => {
    expect(mod.caesarCipher('HeLLo', 3)).toBe("KhOOr");
})

test('Punctuation preservation', () => {
    expect(mod.caesarCipher('Hello, World!', 3)).toBe("Khoor, Zruog!");
})

test('Error on wrong types', () => {
    expect(() => mod.caesarCipher('Hello, World!', 3.14)).toThrow(TypeError);
})


test('Analyze array', () => {
    expect(mod.analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
     });
})

test('Analyze empty array', () => {
    expect(() => mod.analyzeArray([])).toThrow(Error);
})