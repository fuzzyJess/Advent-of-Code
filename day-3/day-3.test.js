const {rucksackSort} = require('./day-3');

describe("rucksackSort", () => {
    test("returns value of single duplicate item", () => {
        const itemArray = ["vJrwpWtwJgWrhcsFMMfFFhpF"];
        expect(rucksackSort(itemArray)).toBe(16);
    })
    test("returns correct value when passed an array containing multiple strings", () => {
        const itemsArray = [
            "vJrwpWtwJgWrhcsFMMfFFhpF", 
            "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL", 
            "PmmdzqPrVvPwwTWBwg", 
            "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn", 
            "ttgJtRGJQctTZtZT", 
            "CrZsJsPPZsGzwwsLwLmpwMDw"
    ];
        expect(rucksackSort(itemsArray)).toBe(157);
    })
})