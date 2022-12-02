/*
opponent: A for Rock, B for Paper, and C for Scissors
you: X for Rock, Y for Paper, and Z for Scissors

score 1 for Rock, 2 for Paper, and 3 for Scissors
+
score 0 if you lost, 3 if the round was a draw, and 6 if you won

What would your total score be if everything goes exactly 
according to your strategy guide?
*/

function tournamentScore(scores) {
    let totalScore = 0;
    for (let i = 0; i < scores.length; i++) {
        if (scores[i][1] === "Y") {
            totalScore += 2;
            if (scores[i][0] === "A") {
                totalScore += 6;
            }
            if (scores[i][0] === "B") {
                totalScore += 3;
            }
        } else if (scores[i][1] === "X") {
            totalScore += 1;
            if (scores[i][0] === "A") {
                totalScore += 3;
            }
            if (scores[i][0] === "C") {
                totalScore += 6;
            }
        } else if (scores[i][1] === "Z") {
            totalScore += 3;
            if (scores[i][0] === "B") {
                totalScore += 6;
            }
            if (scores[i][0] === "C") {
                totalScore += 3;
            }
        }
    }
    return totalScore;
    
}

exporting: module.exports = {tournamentScore};