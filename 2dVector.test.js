const { expect } = require("@jest/globals");
const { DOT_EXTENSION } = require("jest-snapshot/build/SnapshotResolver");
const { Vector } = require("./2dVector")

const v = new Vector(3, 3);
const b = new Vector(2, 4);

test('should return x component 3', () => {
    expect(v.x).toBe(3);
})
test('should return y component 3', () => {
    expect(v.y).toBe(3);
})

test('should return lenght 4.243 of vector (3,3)', () => {
    expect(v.length()).toBe(4.243);
})

test('should return dot product of (3,3)(2,4) is 18 ', () => {
    expect(v.dotProduct(b)).toBe(18);
})
