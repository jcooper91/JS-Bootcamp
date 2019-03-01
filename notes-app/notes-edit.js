// Add a DOM element between the title and body imputs (empty span)
// Set text value: Last edited 4 hours ago 
// Update value on title/body/storage change

const titleElement      = document.querySelector('#note-title')
const bodyElement       = document.querySelector('#note-body')
const removeElement     = document.querySelector('#remove-button')
const createdAtElement  = document.querySelector('#createdAt')
const updatedAtElement  = document.querySelector('#updatedAt')
const noteId            = location.hash.substring(1)
let notes               = getSavedNotes()
let note                = notes.find(function(note) {
    return note.id === noteId
})



if(note === undefined) {
    location.assign('./index.html')
}

titleElement.value = note.title
bodyElement.value = note.body
createdAtElement.value = moment(note.createdAt).format("dddd, MMMM Do YYYY")

titleElement.addEventListener('input', function(e) {
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    saveNotes(notes)
})

bodyElement.addEventListener('input', function(e) {
    note.body = e.target.value
    note.updatedAt = moment().valueOf()
    saveNotes(notes)
})

removeElement.addEventListener('click', function() {
    removeNote(note.id)
    saveNotes(notes)
    location.assign('./index.html')
})

window.addEventListener('storage', function(e) {
    if(e.key === "notes") {
        notes = JSON.parse(e.newValue)
        note = notes.find(function(note) {
            return note.id === noteId
        })
    }       
    if(note === undefined) {
        location.assign('./index.html')
    }
    
    titleElement.value = note.title
    bodyElement.value = note.body

})