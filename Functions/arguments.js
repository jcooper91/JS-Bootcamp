// multiple arguments
let add = function (a, b, c) {
    return a + b + c;
}
let result = add(10, 1, 4);
console.log(result);

// default arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
    return `Name: ${name} - Score: ${score}`;
    // return 'Name: ' + name + ' - Score: ' + score;
}
let scoreText = getScoreText(undefined, 50);
console.log(scoreText);

// challenge area
// total for bill
// tip percente (default) decimal (0.1 = 10% tip)
// take total, multply by .2, thats your tip
let totalTip = function (total, tip = 0.2) {
    let resultTip = total * tip;
    return `You now have to tip ${resultTip}%`;
}
let myTip = totalTip(100, 0.1);
console.log(myTip);

let name = 'Jen';
console.log(`Hey my name is ${name}`);
