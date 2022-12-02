const {finalScore} = require('./day-2-p2');

describe("finalScore", () => {
    test("returns total for one round of RPS", () => {
        const round = [["A", "Y"]];
        expect(finalScore(round)).toBe(4);
    })
    test("returns total for two rounds of RPS", () => {
        const rounds = [["A", "Y"], ["B", "X"]]
        expect(finalScore(rounds)).toBe(5);
    })
    test("returns total for three rounds of RPS", () => {
        const rounds = [["A", "Y"], ["B", "X"], ["C", "Z"]];
        expect(finalScore(rounds)).toBe(12);
    })
})