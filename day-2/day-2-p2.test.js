const {tournamentScore} = require('./day-2');

describe("tournamentScore", () => {
    test("returns total for one round of RPS", () => {
        const round = [["A", "Y"]];
        expect(tournamentScore(round)).toBe(4);
    })
})