const {topCrates} = require('./day-5')
const {crates} = require('./crate-data')

describe("topCrates", () => {
    
    test("returns letters for top crates when one move instruction passed to function", () => {
        const crates = [["Z", "N"], ["M", "C", "D"], ["P"]];
        const instruction = [["1", "2", "3"]]
        expect(topCrates(crates, instruction)).toEqual("NCD");
    })
})