const {rucksackSort} = require('./day-3');

describe("rucksackSort", () => {
    test("returns value of single duplicate item", () => {
        const itemArray = ["vJrwpWtwJgWrhcsFMMfFFhFp"];
        expect(rucksackSort(itemArray)).toBe(16);
    })
})