const {pairsFullyContained, overlappingPairs} = require('./day-4');
const { data } = require('./refactored-data');
const fs = require('fs');

describe("pairsFullyContained", () => {
    test("returns 0 when passed one pair that doesn't fully contain its partner", () => {
        const pair = [["2","9","9","51"]]
        expect(pairsFullyContained(pair)).toBe(0);
    })
    test("returns 1 when passed one pair that does fully contain its partner", () => {
        const pairs = [["2","9","9","51"], ["38","47","37","48"]]
        expect(pairsFullyContained(pairs)).toBe(1);
    })
    test("correct number when passed multiple pairs that fully contain their partners", () => {
        const pairs = [
            ["2", "4", "6", "8"],
            ["2", "3", "4", "5"],
            ["5", "7", "7", "9"],
            ["2", "8", "3", "7"],
            ["6", "6", "4", "6"],
            ["2", "6", "4", "8"]
        ]
        expect(pairsFullyContained(pairs)).toBe(2);
    })
    test("returns correct answer when passed puzzle input", () => {
        const pairs = data;
        expect(pairsFullyContained(pairs)).toBe(450);
    })
})
describe("overlappingPairs", () => {
    test("returns 0 when passed one pair that doesn't overlap at all", () => {
        const pair = [["2", "4", "6", "8"]];
        expect(overlappingPairs(pair)).toBe(0);
    })
    test("returns 1 when passed a pair that does overlap with its partner", () => {
        const pairs = [["2","8","9","51"], ["38","49","37","48"]]
        expect(overlappingPairs(pairs)).toBe(1);
    })
})