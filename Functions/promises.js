// Callback
const getDataCallback = ((callback) => {
    setTimeout(() => {
        callback(undefined, 'This is some data')
    }, 2000)
})

getDataCallback((error, data) => {
    if(error) {
        console.log(error)
    } else {
        console.log(data)
    }
})

// Promise
