const isRaining = true;

// isRaining = false; // cannot reassign const

const person = {
    age: 27
}

// can however reassign properties of a const
person.age = 34;

console.log(person);

console.log(isRaining);
