// Prototypal Inheritance
// myPerson --> Person.prototype --> Object.prototype --> null

class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName  = firstName
        this.lastName   = lastName
        this.age        = age
        this.likes      = likes
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age} years old.`
    
        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}`
        })
    
        return bio 
    }
    set fullName(fullName) {
        const name = fullName.split(' ')
        this.firstName = name[0]
        this.lastName  = name[1]
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}   

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes) {
        super(firstName, lastName, age, likes)
        this.position = position
    }
    getBio() {
        return `${this.fullName} is a ${this.position}`
    }
    getYearsLeft() {
        return 65 - this.age
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, grade, likes) {
        super(firstName, lastName, age, likes)
        this.grade = grade 
    }
    getBio() {
        const status = this.grade >= 70 ? 'Passed' : 'Failed'
        return `${this.firstName} has ${status} the class`
    }
    updateGrade(change) {
        this.grade += change
    }
}

const me = new Employee('Jack', 'Cooper', 27, '88', ['Music', 'Sport'])
me.fullName = 'Tom Clancy'
console.log(me.getBio()) 

