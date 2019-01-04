let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

// return object from function
let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} page long`
    }
}

let bookSummary = getSummary(myBook);
let pageCountSummary = getSummary(otherBook);
console.log(bookSummary.summary);
console.log(pageCountSummary.pageCountSummary);

// challenge area
/**
 * function that reutrns object
 * take farenheit in
 * return object with all three, farenheit, celsius and kelvin value
 */

let tempConversion = function (farenheitTemp) {
    return {
        celsius: `The celsius temperature is ${(farenheitTemp - 32) * 5 / 9}`,
        kelvin: `The Kelvin temerature is ${(farenheitTemp + 459.67) * 5 / 9}`,
        farenheit: `Original farenheit temperature is ${farenheitTemp}`
    }
}

let conversion = tempConversion(50);
console.log(conversion);
