function pairsFullyContained(pairArray) {

    for (let i = 0; i < pairArray.length; i++) {
        pairArray[i][0] = parseInt(pairArray[i][0]);
        pairArray[i][1] = parseInt(pairArray[i][1]);
        pairArray[i][2] = parseInt(pairArray[i][2]);
        pairArray[i][3] = parseInt(pairArray[i][3]);
    }
    // parsed strings in array passed in

    let total = 0;

    for (let j = 0; j < pairArray.length; j++) {

        let hasIncreased = false
        if (pairArray[j][0] >= pairArray[j][2] && pairArray[j][1] <= pairArray[j][3]) {
            total += 1;
            hasIncreased = true;
        }
        if (pairArray[j][2] >= pairArray[j][0] && pairArray[j][3] <= pairArray[j][1]) {
            if (hasIncreased === false) {
                total += 1;
            }
        }
    }
    
    // checks if either number pair is fully contained by other pair

    return total;
}


exporting: module.exports = {pairsFullyContained}