const fs = require('fs');

try {
    const data = fs.readFileSync('./data.txt', 'utf-8');
    const arr = data.split(/\r?\n/);
    const arrMoves = [];
    for (let i = 0; i < arr.length; i++) {
        arrMoves.push(arr[i].split(" "));
    }
    // arrMoves now contains arrays of the two moves in each RPS fight


    let score = 0;
    const arrTotals = [];
} catch (err) {
    console.error(err);
}