const { datastream } = require("./data")
const { findStartOfPacket, findStartOfMessage } = require("./day-6")

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
        expect(findStartOfPacket(datastream)).toBe(1965);
    })
})

describe("findStartOfMessage", () => {
    test("finds start when pattern at beginning of string", () => {
        const signal = "qmgbljsphdztnvjfqwrcgsmlb";
        expect(findStartOfMessage(signal)).toBe(14);
    })
    test("finds start when pattern at different points in string", () => {
        const signal = "mjqjpqmgbljsphdztnvjfqwrcgsmlb";
        expect(findStartOfMessage(signal)).toBe(19);
        const signal2 = "bvwbjplbgvbhsrlpgdmjqwftvncz";
        expect(findStartOfMessage(signal2)).toBe(23);
        const signal3 = "nppdvjthqldpwncqszvftbrmjlhg";
        expect(findStartOfMessage(signal3)).toBe(23);
        const signal4 = "nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg";
        expect(findStartOfMessage(signal4)).toBe(29);
        const signal5 = "zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw";
        expect(findStartOfMessage(signal5)).toBe(26);
    })
    test("returns correct answer when passed puzzle input", () => {
        expect(findStartOfMessage(datastream)).toBe(2773);
    })
})