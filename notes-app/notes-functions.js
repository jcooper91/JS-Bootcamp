// get saved notes from localstorage
const getSavedNotes = function() {
    let notesJSON = localStorage.getItem('notes')

    if(notesJSON !== null) {
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}

// remove note 
const removeNote = function(id) {
    const findNote = notes.findIndex(function(note) {
        return note.id === id
    })
    if(findNote > -1) {
        notes.splice(findNote, 1)
    }
}

// save notes to localStorage
const saveNotes = function(notes) {
    localStorage.setItem('notes', JSON.stringify(notes))
}

// generate the DOM structure for a note
const generateNoteDOM = function(note) {
    const noteEl   = document.createElement('div')
    const textEl   = document.createElement('a')
    const button   = document.createElement('button')

    button.textContent = 'x';
    noteEl.appendChild(button);
    button.addEventListener('click', function() {
        removeNote(note.id)
        saveNotes(notes)
        renderNotes(notes, filters)
    
    })

    if(note.title.length > 0) {
        textEl.textContent = note.title;    
    } else {
        textEl.textContent = 'Unnamed title'
    }
    textEl.setAttribute('href', `./edit.html#${note.id}`)
    noteEl.appendChild(textEl);

    return noteEl;
}


// render appllication notes
const renderNotes = function(notes, filters) {
    const filteredNotes = notes.filter(function(note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    
    document.querySelector('#notes').innerHTML = '';

    filteredNotes.forEach(function(note) {
        const newEl = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(newEl)
    })
}