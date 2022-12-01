const {heaviestElf} = require('./day-1')

describe("heaviestElf", () => {
    test("returns value of array when only one nested array containing one value is entered", () => {
        const elf = [[1000]];
        expect(heaviestElf(elf)).toBe(1000);
    }) 
    test("returns total value of array when only one nested array is entered", () => {
        const elf = [[1000, 2000, 3000]];
        expect(heaviestElf(elf)).toBe(6000);
    }) 
})
const elves = [[1000, 2000, 3000], [4000], [5000, 6000], 
[7000, 8000, 9000], [10000]];


