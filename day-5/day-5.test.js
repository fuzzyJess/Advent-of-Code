const {topCrates} = require('./day-5')
const {crates} = require('./crate-data')

describe("topCrates", () => {
    test("returns letters for top crates in same order when passed no moving instructions", () => {
        const crates = [["Z", "N"], ["M", "C", "D"], ["P"]];
        expect(topCrates(crates)).toEqual("NDP");
    })
})