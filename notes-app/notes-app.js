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

const filters = {
    searchText: ''
}

const renderNotes = function(notes, filters) {
    const filteredNotes = notes.filter(function(note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    })
    
    document.querySelector('#notes').innerHTML = '';

    filteredNotes.forEach(function(note) {
        const newEl = document.createElement('p');
        newEl.textContent = note.title;
        document.querySelector('#notes').appendChild(newEl);
    })
    
}
renderNotes(notes, filters);

document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value;
    renderNotes(notes, filters);    
})

document.querySelector('#create-note').addEventListener('click', function(e) {
    e.target.textContent = 'The button was clicked';
})

document.querySelector('#remove-all').addEventListener('click', function(e) {
    document.querySelectorAll('.note').forEach(function(note) {
        note.remove();
    })
})

document.querySelector('#name-form').addEventListener('submit', function(e) {
    console.log(e.target.elements.firstName.value);
    e.target.elements.firstName.value = '';
    e.preventDefault();
})