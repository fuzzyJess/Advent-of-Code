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


exporting: module.exports = {heaviestElf};