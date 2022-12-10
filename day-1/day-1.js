function heaviestElf(elfArray) {
    const totals = [];
    for (let i = 0; i < elfArray.length; i++){
        let elfTotal = 0;
        for (let j = 0; j < elfArray[i].length; j++) {
            elfTotal += elfArray[i][j];
        }
        totals.push(elfTotal);
        elfTotal = 0;
    }
    return Math.max(...totals);
}

function heaviestThreeElves(elfArray) {
    const totals = [];
    for (let i = 0; i < elfArray.length; i++){
        let elfTotal = 0;
        for (let j = 0; j < elfArray[i].length; j++) {
            elfTotal += elfArray[i][j];
        }
        totals.push(elfTotal);
        elfTotal = 0;
    }
    totals.sort((a,b)=>a-b)
    console.log(totals)
    let combinedWeight = totals[totals.length-1] + totals[totals.length-2] + totals[totals.length-3];
    
    return combinedWeight;
}


exporting: module.exports = {heaviestElf, heaviestThreeElves};