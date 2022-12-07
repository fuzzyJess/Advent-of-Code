const fs = require('fs');

try {
    const data = fs.readFileSync('./data.txt', 'utf-8');
    result = data.split(/\n/);
    console.log(result)
    const stringyStrings = JSON.stringify(result);
    fs.writeFileSync("refactored-data.txt", stringyStrings);
} catch (err) {
    console.error(err);
}