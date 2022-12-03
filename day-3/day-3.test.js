const {rucksackSort} = require('./day-3');

describe("rucksackSort", () => {
    test("returns value of single duplicate item", () => {
        const itemArray = ["vJrwpWtwJgWrhcsFMMfFFhpF"];
        expect(rucksackSort(itemArray)).toBe(16);
    })
})