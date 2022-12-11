const {pairsFullyContained} = require('./day-4');

describe("pairsFullyContained", () => {
    test("returns 0 when passed one pair that doesn't full contain its partner", () => {
        const pair = [["2","9","9","51"]]
        expect(pairsFullyContained(pair)).toBe(0);
    })
})