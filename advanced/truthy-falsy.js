let products = [{}] 
let product = products[0]

// Truthy - values that resolve to true in a boolean context
// Falsy - values that resolve to falsy in a boolean context 
// Falsy values = 0, null, empty string, false, undefined, NaN ----- everything else is Truthy

if(product) {
    console.log('Product Found')
} else {
    console.log('Product not Found')
}