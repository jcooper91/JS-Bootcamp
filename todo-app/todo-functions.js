// Fetch existing todos from localStorage 
const getSavedTodos = () => {
    const todoJSON = localStorage.getItem('todos') 
    return todoJSON ? JSON.parse(todoJSON) : []
}

// Save todos to localStroage
const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
}



// Render application todos based on filters 
const renderTodos = (todos, filters) => {

    let filterTodos = todos.filter((todo) => {
       const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
       const hideCompleteMatch = !filters.hideCompleted || !todo.complete;
       
       return searchTextMatch && hideCompleteMatch; 
    })
    
    const inCompleteTodos = filterTodos.filter((todo) => !todo.complete) 

   document.querySelector('#todo-list').innerHTML = '';
   
   document.querySelector('#todo-list').appendChild(generateSummaryDOM(inCompleteTodos));   
   
   filterTodos.forEach(function(todo) {
       const todoPara = generateTodoDOM(todo)
       document.querySelector('#todo-list').appendChild(todoPara)    
   })
}

// Remove Todo item
const removeTodo = (id) => {
    
    const findIndex = todos.findIndex((todo) => todo.id === id)
    if(findIndex > -1) {
        todos.splice(findIndex, 1)   
    }
}

// Toggle the completed value for a given todo
const checkTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)

    if(todo) {
        todo.complete = !todo.complete
    }
}

// Get the DOM elements for an individual note
const generateTodoDOM = (todo) => {
    const newEl     = document.createElement('div')
    const textEl    = document.createElement('span')
    const checkBox  = document.createElement('input')
    const removeBtn = document.createElement('button')

    removeBtn.textContent = 'x'
 
    checkBox.setAttribute('type', 'checkbox')
    checkBox.checked = todo.complete;
    checkBox.addEventListener('change', () => {
        checkTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })
    
    newEl.appendChild(checkBox)

    textEl.innerHTML = todo.text;

    newEl.appendChild(textEl);

    newEl.appendChild(removeBtn);
    removeBtn.addEventListener('click', () => {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    return newEl;
}

// Get the DOM elements for a list summary
const generateSummaryDOM = (inCompleteTodos) => {
    const summary = document.createElement('h2');
    summary.textContent = `You have ${inCompleteTodos.length} todo's left`;
    return summary;
}
