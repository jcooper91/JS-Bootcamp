const square = (num) => num * num

const squareLong = (num) => {
    return num * num 
}

const people = [{
    name: 'Jack',
    age: 27
}, {
    name: 'Emily',
    age: 22
}, {
    name: 'Jeff',
    age: 33
}]

const under30 = people.filter((person) => person.age < 30)
// console.log(under30)

const age22 = people.find((person) => person.age === 22)
console.log(age22.name)



