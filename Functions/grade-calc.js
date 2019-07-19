/**
 * 2 args - student score, total possible score
 * 15/20  - you got a 75% score
 * 90-100 = A, 80-89 = B, 70-79 = C, 60-69 D, 0-59 = F
 */
/**My Way
let calculateGrade = function (studentScore, totalPossibleScore = 100) {
    let resultMsg;
    let resultScore = (studentScore / totalPossibleScore) * 100;

    if (studentScore >= 90 && studentScore <= 100) {
        resultMsg = `You got an A (${resultScore}%)`;
    } else if (studentScore >= 80 && studentScore <= 89) {
        resultMsg = `You got an B (${resultScore}%)`;
    } else if (studentScore >= 70 && studentScore <= 79) {
        resultMsg = `You got an C (${resultScore}%)`;
    } else if (studentScore >= 60 && studentScore <= 69) {
        resultMsg = `You got an D (${resultScore}%)`;
    } else if (studentScore >= 0 && studentScore <= 59) {
        resultMsg = `You got an F (${resultScore}%)`;
    }
    return resultMsg;
}
let result = calculateGrade(25);
console.log(result);
*/
/**Instructor Way (cleaner) */



const gradeCalc = function (score, totalScore) {
    if(typeof score !== 'number' || typeof totalScore !== 'number') {
        throw Error('Number not passed')
    }
    const percent = (score / totalScore) * 100;
        let letterGrade = '';
        if (percent >= 90) {
            letterGrade = "A"
        } else if (percent >= 80) {
            letterGrade = "B";
        } else if (percent >= 70) {
            letterGrade = "C"
        } else if (percent >= 60) {
            letterGrade = "D"
        } else {
            letterGrade = "F"
        }
        return `You got an ${letterGrade} (${percent}%)`;
    }

try {
    const result = gradeCalc(20, 65)
    console.log(result)
} catch(e) {
    console.log('Catch error: number not passed')
}


