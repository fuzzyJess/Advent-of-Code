const fs = require('fs');

try {
    const data = fs.readFileSync('./data.txt', 'utf8');
    const arr = data.split(/\r?\n/)
    let total = 0;
    const arrTotals = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "") {
            arrTotals.push(total);
            total = 0;
        } else { total += parseInt(arr[i]) }

    }
    console.log(Math.max(...arrTotals));
} catch (err) {
    console.error(err);
}
