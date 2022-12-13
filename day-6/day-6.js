function findStartOfPacket(string) {
    if (string[0] !== string[1]) {
        if (string[0] !== string[2] && string[1] !== string[2]) {
            if (string[0] !== string[3] && string[1] !== string[3] && string[2] !== string[3]) {
                return 4;
            }
        }
    }
}

exporting: module.exports = {findStartOfPacket};