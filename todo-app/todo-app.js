const todos = [
    {
        text: 'Play piano',
        complete: true
    },
    {
        text: 'Code',
        complete: true
    },
    {
        text: 'Cook',
        complete: false
    },
    {
        text: 'Run',
        complete: false
    },
    {
        text: 'Sleep',
        complete: true
    }
]


 const filters = {
     searchText: ''
 }

// renderTodos = filter by search text in input & filter by complte (searchTextMatch & hideCompleteMatch respectively)
// filter inCompleteTodos
// print incomplete todos to a h2
// list the todos in a list of p
// add a todo to the array
// query/eventlisteners - hide-completed, search-todo, todo-form 

const renderTodos = function(todos, filters) {

    const filteredTodos = todos.filter(function(todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
        return searchTextMatch;
    })
    
    document.querySelector('#todo-list').innerHTML = ''; 

    filteredTodos.forEach(function(todo) {
        const newEl = document.createElement('p');
        newEl.innerText = todo.text;
        document.querySelector('#todo-list').appendChild(newEl);
    })
}

renderTodos(todos, filters);

document.querySelector('#search-todo').addEventListener('input', function(e) {
    filters.searchText = e.target.value;
    renderTodos(todos, filters)
})
































// COMPLETE TEXT
/*
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
   
   // print incomplete todo's
   const summary = document.createElement('h2');
   summary.textContent = `You have ${inCompleteTodos.length} todo's left`;
   document.querySelector('#todo-list').appendChild(summary);
   
   
   filterTodos.forEach(function(todo) {
       const todoPara = document.createElement('p');
       todoPara.innerHTML = todo.text;
       document.querySelector('#todo-list').appendChild(todoPara);
   })
}

renderTodos(todos, filters)

document.querySelector('#hide-completed').addEventListener('change', function(e) {
   filters.hideCompleted = e.target.checked;
   renderTodos(todos, filters)
})


document.querySelector('#search-todo').addEventListener('input', function(e) {
    filters.searchText = e.target.value;
    renderTodos(todos, filters);
})


document.querySelector('#todo-form').addEventListener('submit', function(e) {
   e.preventDefault();
    todos.push({
       text:  e.target.elements.newTodo.value,
       complete: false
    }) 
   e.target.elements.newTodo.value = '';
   renderTodos(todos, filters)
  
})

document.querySelector('#create-todo').addEventListener('click', function(e) {
   e.target.textContent = 'The button was clicked!';
})
*/