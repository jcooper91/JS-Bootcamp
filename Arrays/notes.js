const notes = ['Note 1', 'Note 2', 'Note 3'];
console.log(notes.length);
console.log(notes[0]);

console.log(notes.pop()); // returns last array element
notes.push('My new note');

console.log(notes.shift()); // remove first item
console.log(notes.unshift('My first note'));
// add item at beginnig of array


// access the last item in an array
// console.log(notes[notes.length - 1]); // note 3 - prints last item in array 
console.log(notes);

