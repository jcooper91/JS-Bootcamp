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

 const renderTodos = function(todos, filters) {
     const filterTodos = todos.filter(function(todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
     })
     
     
     const inCompleteTodos = filterTodos.filter(function(todo) {
        return !todo.complete;
    }) 

    document.querySelector('#todo-list').innerHTML = '';
    
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

 document.querySelector('#search-todo').addEventListener('input', function(e) {
     filters.searchText = e.target.value;
     renderTodos(todos, filters);
 })

 document.querySelector('#create-todo').addEventListener('click', function(e) {
     e.target.textContent = 'The button was clicked!';
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

