// undefined for variable
let name;
name = 'Jen';
if (name === undefined) {
    console.log('Name is undefined');
} else {
    console.log(name);
}

// undefined for function arguments
// undefined as function default value
let square = function (num) {
    console.log(num);
}

let result = square();
console.log(result);

// use null when you want to clear a variables value
// undefined = JS language has set variable to undefined
// null - means developer has set the value to null

let age = 27;

age = null;

console.log(age);

