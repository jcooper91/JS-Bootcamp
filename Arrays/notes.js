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

const sortNotes = function(notes) {
    notes.sort(function(a, b) {
        if(a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if(b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}
sortNotes(notes);
console.log(notes);



const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase();
    });
}


const filteredNote = notes.filter(function(note, index) {
    const isTitleMatch = note.title.toLowerCase().includes('ne');
    const isBodyMatch = note.body.toLowerCase().includes('ne');
    return isTitleMatch || isBodyMatch; 
})

const findNotes = function(notes, query) {
    return notes.filter(function(note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
        return isTitleMatch ||isBodyMatch;
    })
}
// console.log(findNotes(notes, 'Modification'))

// const findNote = function (notes, noteTitle) {
//     let index = notes.findIndex(function (note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase();
//     })
//     return notes[index];
// }
// const note = findNote(notes, 'my next trip');
// console.log(note);




// console.log(notes.length);
// console.log(notes);


// let index = notes.findIndex(function (note, index) {
//     console.log(note);
//     return note.title === 'Resolutions this year';
// });
// console.log(index);




// console.log(filteredNote);




// console.log(notes.shift()); // remove first item
// console.log(notes.unshift('My first note')); add item at beginning of array

// access the last item in an array
// console.log(notes[notes.length - 1]); // note 3 - prints last item in array 

// if you set the second digit to 0, it won't remove any item, jsut add
// if you omit the third argument, this is saying go to index 1 and delete 1 item
// notes.splice(1, 1, 'This is the new second item');

// notes[2] = 'This is the new note';

// notes.forEach(function (item, index) {
//     console.log(index);
//     console.log(item);
// })

// console.log(notes.indexOf('Note 1'));
// indexOf doesn't work with objects wihthin an array

// returns first instance of match
// will stop runnign through array once match is found
// will return number in array where match is or -1 if not match 