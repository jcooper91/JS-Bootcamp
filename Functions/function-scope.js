let convertFarenheitToCelsius = function (farenheit) {
    let celsius = (farenheit - 32) * 5 / 9;
    return celsius;
}

let conversion = convertFarenheitToCelsius(10);
console.log(conversion);