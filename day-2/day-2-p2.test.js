const {finalScore} = require('./day-2-p2');

describe("finalScore", () => {
    test("returns total for one round of RPS", () => {
        const round = [["A", "Y"]];
        expect(finalScore(round)).toBe(4);
    })
})