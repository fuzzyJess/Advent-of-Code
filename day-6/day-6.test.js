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
    test("finds start when pattern begins further into string", () => {
        const signal = "nppdvjthqldpwncqszvftbrmjlhg";
        expect(findStartOfPacket(signal)).toBe(6);
        const signal2 = "nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg";
        expect(findStartOfPacket(signal2)).toBe(10);
        const signal3 = "zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw";
        expect(findStartOfPacket(signal3)).toBe(11);
    })
    test("returns correct answer when passed puzzle input", () => {
        expect(findStartOfPacket(datastream)).toBe();
    })
})