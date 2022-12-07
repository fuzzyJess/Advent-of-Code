const {rucksackSort} = require('./day-3');
const { data } = require('./refactored-data');
const fs = require('fs');

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
    test("returns answer", () => {
        const itemsArray = data;
        expect(rucksackSort(itemsArray)).toBe(7568);
    })
})