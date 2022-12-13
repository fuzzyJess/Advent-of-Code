const { datastream } = require("./data")
const { findStartOfPacket } = require("./day-6")

describe("findStartOfPacket", () => {
    test("finds start when pattern at beginning of string", () => {
        const signal = "vwbjplbgvbhsrlpgdmjqwftvncz";
        expect(findStartOfPacket(signal)).toBe(4);
    })
})