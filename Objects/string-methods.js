let name = '  Jack Cooper  '

console.log(name.length);

console.log(name.toUpperCase());

console.log(name.toLowerCase());

console.log(name.trim());

console.log(name.includes('password'));

let isValidPassword = function (password) {
    // return if true
    // shorthand of if statement
    return (password.length > 8 && !password.includes('password'));
}

console.log(isValidPassword('dfdf'));
console.log(isValidPassword('dfdasdsdasdf'));
console.log(isValidPassword('dfdfpassword'));
