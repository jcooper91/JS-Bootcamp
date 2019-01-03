/** 
 * JS uses lexical scoping (static scoping)
 // global scope- everything defined outside all code blocks
 local scope - things defined inside code block

 */

// Globsl Scope (varOne)
// Local Scope (varTwo)
// Local Scope (varFour)
// Local Scope (varThree)


let varOne = 'varOne';

if (true) {

    let varTwo = 'varTwo';

    if (true) {
        let varFour = 'varFour'
    }
}

if (true) {
    let varThree = 'varThree';
}
