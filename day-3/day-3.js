function rucksackSort(itemsArray) {
    const letterArray = []
    for (let i = 0; i < itemsArray.length; i++) {
        const middle = itemsArray[i].length / 2;
        const sectionOne = itemsArray[i].slice(0, middle);
        const sectionTwo = itemsArray[i].slice(-middle);
    }
}

exporting: module.exports = {rucksackSort};