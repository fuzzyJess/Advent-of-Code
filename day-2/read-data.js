const fs = require('fs');
// creates new file called refactored-data.txt to hold move info in separate arrays.

try {
    const data = fs.readFileSync('./data.txt', 'utf-8');
    const arr = data.split(/\r?\n/);
    const arrMoves = [];
    for (let i = 0; i < arr.length; i++) {
        arrMoves.push(arr[i].split(" "));
    }
    // arrMoves now contains arrays of the two moves in each RPS fight
    const stringyMoves = JSON.stringify(arrMoves);
    fs.writeFileSync("refactored-data.txt", stringyMoves)
} catch (err) {
    console.error(err);
}