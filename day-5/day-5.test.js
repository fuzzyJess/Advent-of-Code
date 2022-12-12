const {topCrates} = require('./day-5')
const {crates} = require('./crate-data')
const {moves} = require('./refactored-data')

describe("topCrates", () => {
    test("returns letters for top crates when one move instruction passed to function", () => {
        const crates = [["Z", "N"], ["M", "C", "D"], ["P"]];
        const instruction = [["1", "2", "3"]]
        expect(topCrates(crates, instruction)).toEqual("NCD");
    })
    test("returns letters for top crates when mulitiple instructions passed to function", () => {
        const crates = [["Z", "N"], ["M", "C", "D"], ["P"]];
        const instructions = [["1", "2", "3"], ["1", "2", "1"]]
        expect(topCrates(crates, instructions)).toEqual("CMD");
    })
    test("returns correct letters for crates when passed example instructions", () => {
        const crates = [["Z", "N"], ["M", "C", "D"], ["P"]];
        const instructions = [
            ["1", "2", "1"], 
            ["3", "1", "3"],
            ["2", "2", "1"],
            ["1", "1", "2"]
        ]
        expect(topCrates(crates, instructions)).toEqual("CMZ")
    })
    test("returns correct answer when passed puzzle input", () => {
        expect(topCrates(crates, moves)).toEqual("TLNGFGMFN")
    })
})