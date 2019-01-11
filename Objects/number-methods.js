let num = 103.941;

// toFixed = to specify the numberof digits after the decimal that we'd like to reserve
console.log(num.toFixed(1)); // 103.9

console.log(Math.round(num)); // 104

console.log(Math.floor(num)); // 103

console.log(Math.ceil(num)); // 104

let min = 10;
let max = 20;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(randomNum);

// persons guess  some guesses between 1 and 5
// makeGuess
let makeGuess = function (guess) {
    let min = 0;
    let max = 5;
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
    if (randomNum === guess) {
        console.log(`You gusses correctly, you matched with the number ${randomNum}`);
    } else {
        console.log(`Sorry, you guess incorretly, the correct number was ${randomNum}`);
    }
    // alternative way if you didn't want a message
    // return guess === randomNum;
}

makeGuess(3);