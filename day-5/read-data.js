const fs = require('fs');

try {
    const data = fs.readFileSync('./move-data.txt', 'utf-8');
    let data1 = data.split(/\n/);
    let data2 = [];
    for (let i = 0; i < data1.length; i++) {
        var matches = data1[i].match(/(\d+)/g);
        data2.push(matches)
    }
    // will need to use parseInt() to convert these into numbers

    // splits input up into nested arrays containing number values 
    // for each instruction
    // move = [0]
    // from = [1]
    // to = [2]
    
    const stringyStrings = JSON.stringify(data2);
    fs.writeFileSync("refactored-data.txt", stringyStrings);
} catch (err) {
    console.log(err);
}