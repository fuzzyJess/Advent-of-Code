function topCrates(crates, instructions) {
    let topCrates = "";

    for (let j = 0; j < instructions.length; j++) {
        for (let k = 0; k < instructions[j][0]; k++) {
            // repeats for number of moves value
            let moveFrom = instructions[j][1] - 1;
            let moveTo = instructions[j][2] - 1;
            // saves moveFrom & moveTo as temporary variables
            let crateToMove = crates[moveFrom].pop();
            crates[moveTo].push(crateToMove);
        }
    }

    for (let i = 0; i < crates.length; i++) {
        topCrates += crates[i][crates[i].length - 1]
    }

    return topCrates;
}

exporting: module.exports = {topCrates}