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


const p = document.querySelector('p');
const ps = document.querySelectorAll('p');
ps.forEach(function(p) {
    p.innerText = '****';
    // p.remove();
})


// add a new element
// apendChild places the item in the last element of the section your picking. So when selecting body, it would be the last element in the body. REMEMBER!
let newParagraph = document.createElement('p');
newParagraph.innerText = 'This is a new element by Javascript';
document.querySelector('body').appendChild(newParagraph);