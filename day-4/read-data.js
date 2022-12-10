const fs = require('fs');

try {
    const data = fs.readFileSync('./data.txt', 'utf-8');
    console.log(data)
    let data1 = data.split(/\n/);
    let data2 = [];
    for (let i = 0; i < data1.length; i++) {
        data2.push(data1[i].split(/[-,]/));
    }
    // splits input data into nested arrays containing 4 strings
    // start range(elf 1), end range(elf 2)

    // will need to use parseInt() to convert these into numbers

    const stringyStrings = JSON.stringify(data2);
    fs.writeFileSync("refactored-data.txt", stringyStrings);
} catch (err) {
    console.log(err);
}