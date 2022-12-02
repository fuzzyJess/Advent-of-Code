/*
opponent: A for Rock, B for Paper, and C for Scissors
you: X need to lose, Y need to draw, and Z need to win

score 1 for Rock, 2 for Paper, and 3 for Scissors
+
score 0 if you lost, 3 if the round was a draw, and 6 if you won

What would your total score be if everything goes exactly 
according to your strategy guide?
*/

function finalScore(strategyGuide) {
    let totalScore = 0;
    for (let i = 0; i < strategyGuide.length; i++) {
        if (strategyGuide[i][1] === "X") {
            if (strategyGuide[i][0] === "A") {
                totalScore += 1;
            }
            if (strategyGuide[i][0] === "B") {
                totalScore += 2;
            }
            if (strategyGuide[i][0] === "C") {
                totalScore += 3;
            }

        } else if (strategyGuide[i][1] === "Y") {
            if (strategyGuide[i][0] === "A") {
                totalScore += 4;
            }
        } else if (strategyGuide[i][1] === "Z") {

        }
    }
    return totalScore;
}

exporting: module.exports = {finalScore};