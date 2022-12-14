const { datastream } = require("./data")
const { findStartOfPacket } = require("./day-6")

describe("findStartOfPacket", () => {
    test("finds start when pattern at beginning of string", () => {
        const signal = "vwbjplbgvbhsrlpgdmjqwftvncz";
        expect(findStartOfPacket(signal)).toBe(4);
    })
    test("finds start when pattern begins one into string", () => {
        const signal = "bvwbjplbgvbhsrlpgdmjqwftvncz";
        expect(findStartOfPacket(signal)).toBe(5);
    })
})