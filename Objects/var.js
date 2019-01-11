// one main difference between var and let or const, is that let is block scope wheere is var is function scope, meaning a scope is only created when a function is
// we can access firstname, because var doesn't create a new scope.  
// If this was let, it would createa block scope and we wouldn't be able to access it.
// let is better because we can use variables, do little calcs etc wihout having to worry if they intefer with variables outside of that block 

if (10 === 10) {
    // let firstName = 'Jack'; // fail
    var firstName = 'Jack'; // work
}
console.log(firstName);

// it isa lot 
// var declaration gets hoisted top top of scope, so if you log it before its been assigned, you'll still ge a value, which will be undefine
// however if you then assign after, you will still get undefined, as it's only the declaration of the variable that gets hoisted up 

// console.log(myVar); // undefined
// var myVar;
// myVar = 10;
// console.log(myVar); // 10

console.log(myVar); // reference error - makes sense in terms of readibility as wlel
let myVar;
myVar = 10;
console.log(myVar); // 10