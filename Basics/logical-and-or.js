let temp = 615;
if (temp >= 60 && temp <= 90) {
    console.log('It\'s pretty nice out');
} else if (temp <= 0 || temp >= 100) {
    console.log('It\'s pretty dangerous out');
} else {
    console.log('Do what you want');
}

let isGuestOneVegan = true;
let isGuestTwoVegan = false;
if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Make sure you offer up only vegan options');
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Make sure there\'s some vegan options');
} else {
    console.log('Don\'t worry about vegan options');
}