/* 
    Lowercase item types a through z have priorities 1 through 26.
    Uppercase item types A through Z have priorities 27 through 52.
*/

function rucksackSort(itemsArray) {
    const letterArray = []
    for (let i = 0; i < itemsArray.length; i++) {
        const middle = itemsArray[i].length / 2;
        const sectionOne = itemsArray[i].slice(0, middle);
        const sectionTwo = itemsArray[i].slice(-middle);
        // slices each string into two equal parts
        
        const dupLetters = [];
        for (let j = 0; j < sectionOne.length; j++) {
            for (let k = 0; k < sectionTwo.length; k++) {
                if (sectionOne[j] === sectionTwo[k]) {
                    if (sectionOne[j] !== undefined) {
                        if (sectionTwo[k] !== undefined) {
                        dupLetters.push(sectionOne[j])

                        }
                }
            }
        }
    }    
        letterArray.push(dupLetters[0]);

        // pushes the duplicate letter into the letterArray
    }
    result = 0;
    for (let l = 0; l < letterArray.length; l++) {
        if (letterArray[l] == letterArray[l].toLowerCase()) {
            result += letterArray[l].charCodeAt(0) - 96;
        } else {
            result += letterArray[l].charCodeAt(0) - 38;
        }
        // finds letter values and adds them together
    }
    return result;
}

exporting: module.exports = {rucksackSort};