const getTip = (amount) => {
    if(typeof amount === 'number') {
        return amount * .25; 
    } else {
        throw ("A number wasn't passed");
    }
}

try {
    const result = getTip('hello')
    console.log(result)
} catch(e) {
    console.log('Catch block is running')
}


