const notes = [{},
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
// console.log(notes.length);
// console.log(notes[0]);

// console.log(notes.pop()); // returns last array element
// notes.push('My new note');

// console.log(notes.shift()); // remove first item
// console.log(notes.unshift('My first note'));
// add item at beginnig of array




// access the last item in an array
// console.log(notes[notes.length - 1]); // note 3 - prints last item in array 

// if you set the second digit to 0, it won't remove any item, jsut add
// if you omit the third argument, this is saying go to index 1 and delete 1 item
// notes.splice(1, 1, 'This is the new second item');

// notes[2] = 'This is the new note';

notes.forEach(function (item, index) {
    console.log(index);
    console.log(item);
})
console.log(notes.length);
console.log(notes);

// console.log(notes.indexOf('Note 1'));
// indexOf doesn't work with objects wihthin an array





