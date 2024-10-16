import { add, subtract, multiply, divide } from './calculate';

describe('Calculator Functions', () => {
    test('add function adds two numbers', () => {
        expect(add(1, 3)).toBe(4);
        expect(add(-1, 1)).toBe(0);
    });

    test('subtract function subtracts two numbers', () => {
        expect(subtract(5, 2)).toBe(3);
        expect(subtract(2, 5)).toBe(-3);
    });

    test('multiply function multiplies two numbers', () => {
        expect(multiply(2, 3)).toBe(6);
        expect(multiply(-2, 3)).toBe(-6);
    });

    test('divide function divides two numbers', () => {
        expect(divide(6, 2)).toBe(3);
        expect(() => divide(1, 0)).toThrow("Impossible");
    });
});