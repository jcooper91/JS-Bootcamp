// Fetch existing todos from localStorage 
const getSavedTodos = function() {
    const todoJSON = localStorage.getItem('todos');

    if(todoJSON !== null) {
        return JSON.parse(todoJSON)
    } else {
        return []
    }
}

// Save todos to localStroage
const saveTodos = function(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
}



// Render application todos based on filters 
const renderTodos = function(todos, filters) {

    let filterTodos = todos.filter(function(todo) {
       const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
       const hideCompleteMatch = !filters.hideCompleted || !todo.complete;
       
       return searchTextMatch && hideCompleteMatch; 
    })
    
    const inCompleteTodos = filterTodos.filter(function(todo) {
       return !todo.complete;
   }) 

   document.querySelector('#todo-list').innerHTML = '';
   
   document.querySelector('#todo-list').appendChild(generateSummaryDOM(inCompleteTodos));   
   
   filterTodos.forEach(function(todo) {
       const todoPara = generateTodoDOM(todo)
       document.querySelector('#todo-list').appendChild(todoPara)    
   })
}

// Remove Todo item
const removeTodo = function(id) {
    
    const findIndex = todos.findIndex(function(todo) {
        return todo.id === id;
    })
    if(findIndex > -1) {
        todos.splice(findIndex, 1)   
    }
    
}

// Toggle the completed value for a given todo
const checkTodo = function(id) {
    const todo = todos.find(function(todo) {
        return todo.id === id
    })
    if(todo !== undefined) {
        todo.complete = !todo.complete
    }
}

// Get the DOM elements for an individual note
const generateTodoDOM = function(todo) {
    const newEl     = document.createElement('div')
    const textEl    = document.createElement('span')
    const checkBox  = document.createElement('input')
    const removeBtn = document.createElement('button')

    removeBtn.textContent = 'x'

    checkBox.setAttribute('type', 'checkbox')
    checkBox.checked = todo.complete;
    checkBox.addEventListener('change', function() {
        checkTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })
    
    newEl.appendChild(checkBox)

    textEl.innerHTML = todo.text;

    newEl.appendChild(textEl);

    newEl.appendChild(removeBtn);
    removeBtn.addEventListener('click', function() {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    return newEl;
}

// Get the DOM elements for a list summary
const generateSummaryDOM = function(inCompleteTodos) {
    const summary = document.createElement('h2');
    summary.textContent = `You have ${inCompleteTodos.length} todo's left`;
    return summary;
}
