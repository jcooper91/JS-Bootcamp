// get saved notes from localstorage
const getSavedNotes = () => {
    let notesJSON = localStorage.getItem('notes')
    return notesJSON ? JSON.parse(notesJSON) : []
}

// save notes to localStorage
const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes))
}

// remove note 
const removeNote = (id) => {
    const findNote = notes.findIndex((note) => note.id === id)
    
    if(findNote > -1) {
        notes.splice(findNote, 1)
    }
}



// generate the DOM structure for a note
const generateNoteDOM = (note) => {
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

// sort notes by the 3 options/dropdown
const sortNotes = (notes, sortBy) => {
    if(sortBy === 'byEdited') {
        return notes.sort((a, b) => {
            if(a.updatedAt > b.updatedAt) {
                return -1
            } else if (a.updatedAt < b.updatedAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if(sortBy === 'byCreated') {
        return notes.sort((a, b) => {
            if(a.createdAt > b.createdAt) {
                return -1
            } else if (a.createdAt < b.createdAt) {
                return 1
            } else {
                return 0
            }
        })
    }  else if(sortBy === 'alphabetical') {
        return notes.sort((a, b) => {
            if(a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1
            } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1
            } else {
                return 0
            }
        })
    } else {
        return notes
    }
}


// render appllication notes
const renderNotes = (notes, filters) => {
    notes = sortNotes(notes, filters.sortBy)
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))
    
    document.querySelector('#notes').innerHTML = '';

    filteredNotes.forEach((note) => {
        const newEl = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(newEl)
    })
}

// Generate last edited 
const generateLastEdited = (timestamp) => {
    return `Lasted Edited ${moment(timestamp).fromNow()}`;
}