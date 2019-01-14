const notes = ['Note 1', 'Note 2', 'Note 3'];
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

for (let count = 0; count <= 2; count++) {
    console.log(count);
}





