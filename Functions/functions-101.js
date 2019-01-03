// function - input (arguments), code, output (return value)
let greetUser = function () {
    console.log('Welcome User');
}
greetUser();

let square = function (num) {
    let result = num * num;
    return result;
}
let result = square(3);
let otherResult = square(10);
console.log(result);
console.log(otherResult);

let convertFarenheitToCelsius = function (farenheit) {
    let celsius = (farenheit - 32) * 5 / 9;
    return celsius;
}

let conversion = convertFarenheitToCelsius(10);
console.log(conversion);


