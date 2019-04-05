const add = () => {
    return arguments[0] + arguments[1]
}

// won't work because you cannt access local variables like argumnets with arrow functions
// console.log(add(11, 22, 33, 44))

const car = {
    colour: "red",
    // THIS keyword isn't bound to the object when using arrow functions and therefore is undefined
    // when created methods use the below syntax, which will still bind THIS to the object 
    getSummary() {
        return `The car is ${this.colour}`
    }
}

console.log(car.getSummary())


