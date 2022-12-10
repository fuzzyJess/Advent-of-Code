const fs = require('fs');

try {
    const data = fs.readFileSync('./data.txt', 'utf-8');
    let data1 = data.split(/\n/);
    let data2 = [];
    for (let i = 0; i < data1.length; i++) {
        data2.push(data1[i].split(","));
    }
    const stringyStrings = JSON.stringify(data2);
    fs.writeFileSync("refactored-data.txt", stringyStrings);
} catch (err) {
    console.log(err);
}