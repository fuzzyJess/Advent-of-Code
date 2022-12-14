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

exporting: module.exports = {findStartOfPacket};