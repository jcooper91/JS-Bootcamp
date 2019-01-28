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

/**
 * 2 - setup filters (searchText) and wire up a new filter input to change it 
 * 3 - create a renderTodos function to render and rerender the laster filtered todo data
 */

 const filters = {
     searchText: ''
 }

 const renderTodos = function(todos, filters) {
     const filterTodos = todos.filter(function(todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
     })
     
     document.querySelector('#todo-list').innerHTML = '';
     
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

const inCompleteTodos = todos.filter(function(todo) {
    return !todo.complete;
}) 

const summary = document.createElement('h2');
summary.innerText = `You have ${inCompleteTodos.length} todo's left`;
document.querySelector('body').appendChild(summary);















// const ps = document.querySelectorAll('p');

// ps.forEach(function(p) {
//     if(p.textContent.includes('the')) {
//         p.remove();
//     }
// })