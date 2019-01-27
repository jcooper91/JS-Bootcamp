const notes = [
    {
        title: 'My next trip',
        body: 'Off to Vienna'
    }, {
        title: 'Resolutions this year',
        body: 'Exercise'
    }, {
        title: 'Office Modification',
        body: 'Get a new mouse'
    }];

document.querySelector('button').addEventListener('click', function(e) {
    e.target.textContent = 'This button has changed its text';
    console.log(e)
})