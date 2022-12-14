const { visibleTrees } = require("./day-8")

describe("visibleTrees", () => {
    test("returns length of array when passed one nested array of trees", () => {
        const treeRow = [[3, 0, 3, 7, 3]];
        expect(visibleTrees(treeRow)).toBe(5);
    })
})