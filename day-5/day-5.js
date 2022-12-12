function topCrates(crates, instructions) {
    let topCrates = "";

    if (instructions === undefined) {
        for (let i = 0; i < crates.length; i++) {
            topCrates += crates[i][crates[i].length - 1]
        }
    }

    return topCrates;
}

exporting: module.exports = {topCrates}