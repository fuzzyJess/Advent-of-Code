function findStartOfPacket(string) {
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== string[i+1]) {
            if (string[i] !== string[i+2] && string[i+1] !== string[i+2]) {
                if (string[i] !== string[i+3] && string[i+1] !== string[i+3] && string[i+2] !== string[i+3]) {
                    return i + 4;
                }
            }
        }
    }
}

function findStartOfMessage(string) {
    for (let i = 0; i < string.length; i++) {
        const tempSet = new Set();
        for (let j = 0; j < 14; j++) {
            tempSet.add(string[i + j])
        }
        console.log(tempSet);
        if (tempSet.size === 14) {
            return i + 14;
        }
    }
}

exporting: module.exports = {findStartOfPacket, findStartOfMessage};