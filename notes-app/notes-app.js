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
        body: '',
        createdAt: moment().valueOf().toString()
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
const now = moment().valueOf().toString()
console.log(now.toString());


// 1. Add createdAt and updateAt to the new notes (store timestamp)
// 2. Update updateAt when someone edits a title or body
// 3. Delete all old notes before testing
