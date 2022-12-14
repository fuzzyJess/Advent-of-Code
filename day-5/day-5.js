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

function crateMover9001(crates, instructions) {
    let topCrates = "";
    
    for (let i = 0; i < instructions.length; i++) {
        let cratesToMove = [];
        let moveFrom = 0;
        let moveTo = 0;
        for (let j = 0; j < instructions[i][0]; j++) {
            moveFrom = instructions[i][1] - 1;
            moveTo = instructions[i][2] - 1;
            let singleCrate = crates[moveFrom].pop();
            cratesToMove.unshift(singleCrate)
        }
        for (let k = 0; k < cratesToMove.length; k ++) {
            crates[moveTo].push(cratesToMove[k]);
        }
    }
    for (let l = 0; l < crates.length; l++) {
            topCrates += crates[l][crates[l].length -1];
    }

    return topCrates;
}

exporting: module.exports = {topCrates, crateMover9001}