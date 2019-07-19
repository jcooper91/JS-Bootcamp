const myCounter = () => {
    let count = 0

    return {
        increment () {
            count++
        },
        decrement() {
            count--
        },
        get() {
            return count
        }
    }
}
const counter = myCounter()
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.decrement())
console.log(counter.get())

const createAdder = (a) => {
    return (b) => {
        return a + b 
    }
}

const add10 = createAdder(10)
console.log(add10(11))
console.log(add10(-12))

const add100 = createAdder(100)
console.log(add100(-40))

// Tipper 

// 1. Create a createTipper which takes in the base tip (.15 for 15% tip)
// 2. Set it up to return a function that takes in the bill amount 
// 3. Call createTipper to generate a few functions for different percentages
// 4. Use the generated functions to calculate and print them

const createTipper = (tip) => {
    return (bill) => {
        return bill * tip 
    }
}

const tip10 = createTipper(.1)
console.log(tip10(300))