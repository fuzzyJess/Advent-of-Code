const {tournamentScore} = require('./day-2');

describe("tournamentScore", () => {
    test("returns total for one round of RPS", () => {
        const round = [["A", "Y"]];
        expect(tournamentScore(round)).toBe(8);
    })
    test("returns total for two rounds of RPS", () => {
        const rounds = [["A", "Y"], ["B", "X"]];
        expect(tournamentScore(rounds)).toBe(9);
    })
})