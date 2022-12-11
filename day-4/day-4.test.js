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
})