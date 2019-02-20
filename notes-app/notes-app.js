let notes = getSavedNotes();

const filters = {
    searchText: ''
}

renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', function (e) {
    let noteId = uuidv4()
    notes.push({
        id: noteId,
        title: '',
        body: ''
    })
    saveNotes(notes)
    location.assign(`./edit.html#${noteId}`)
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
})

window.addEventListener('storage', function(e) {
    if(e.key === "notes") {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})

// Unix epoch - January 1st 1970 00:00:00

const now = new Date()
const timestamp = now.getTime()

const myDate = new Date(timestamp)
console.log(myDate.getFullYear());



// console.log(now.toString());
// console.log(`Year: ${now.getFullYear()}`);
// console.log(`Month: ${now.getMonth()}`);
// console.log(`Day of the month: ${now.getDate()}`);
// console.log(`Hours: ${now.getHours()}`);
// console.log(`Minute: ${now.getMinutes()}`);
// console.log(`Seondds: ${now.getSeconds()}`);


