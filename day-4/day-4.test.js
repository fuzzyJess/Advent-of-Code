const {pairsFullyContained} = require('./day-4');

describe("pairsFullyContained", () => {
    test("returns 0 when passed one pair that doesn't fully contain its partner", () => {
        const pair = [["2","9","9","51"]]
        expect(pairsFullyContained(pair)).toBe(0);
    })
    test("returns 1 when passed one pair that does fully contain its partner", () => {
        const pair = [["2","9","9","51"], ["38","47","37","48"]]
        expect(pairsFullyContained(pair)).toBe(1);
    })
    test("correct number when passed multiple pairs that fully contain their partners", () => {
        const pair = [
            ["2", "4", "6", "8"],
            ["2", "3", "4", "5"],
            ["5", "7", "7", "9"],
            ["2", "8", "3", "7"],
            ["6", "6", "4", "6"],
            ["2", "6", "4", "8"]
        ]
        expect(pairsFullyContained(pair)).toBe(2);
    })
})