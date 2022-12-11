function pairsFullyContained(pairArray) {
    const parsedArray = [];

    for (let i = 0; i < pairArray.length; i++) {
        parsedArray.push(parseInt(pairArray[i][0]));
        parsedArray.push(parseInt(pairArray[i][1]));
        parsedArray.push(parseInt(pairArray[i][2]));
        parsedArray.push(parseInt(pairArray[i][3]));
    }
    // parsed strings in array passed in

    let total = 0;
    let hasIncreased = false
    if (parsedArray[0][0] >= parsedArray[0][2] && parsedArray[0][1] <= parsedArray[0][3]) {
        total += 1;
        hasIncreased = true;
        console.log("if one")
    }
    if (parsedArray[0][2] >= parsedArray[0][0] && parsedArray[0][3] <= parsedArray[0][1]) {
        if (hasIncreased === false) {
            total += 1;
        }
    }

    // checks if either number pair is fully contained by other pair
    
    return total;
}


exporting: module.exports = {pairsFullyContained}