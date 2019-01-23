const todos = [
    {
        text: 'play piano',
        complete: true
    },
    {
        text: 'code',
        complete: true
    },
    {
        text: 'cook',
        complete: false
    },
    {
        text: 'run',
        complete: false
    },
    {
        text: 'sleep',
        complete: true
    }
]

const sortTodos = function(todos) {
    todos.sort(function(a, b) {
        if(!a.complete && b.complete) {
            return -1
        } else if(!b.complete && a.complete) {
            return 1
        } else {
            return 0
        }
    })
}
sortTodos(todos)
console.log(todos);


const getThingsToDo = function(todos) {
    return todos.filter(function(todo, index) {
        return !todo.complete;
        // same as below
        // return todo.complete === false;
    }) 
}
// console.log(getThingsToDo(todos));

let deleteTodo = function (todos, deleteItem) {
    let index = todos.findIndex(function (todo, index) {
        return todo.text.toLowerCase() === deleteItem.toLowerCase();
    })
    todos.splice(index, 1);
}
// deleteTodo(todos, 'run');
// console.log(todos);

// delete third item
// add new item to end
// remove first item from list

// todos.splice(2, 1);
// todos.push('eat');
// todos.shift();

// todos.forEach(function (item, index) {
//     let num = index + 1;
//     console.log(`${num}. ${item}`);
// })

// for (let count = 0; count < todos.length; count++) {
//     const num = count + 1;
//     const todo = todos[count];
//     console.log(`${num}. ${todo}`);
// }

// 1. convert array to array of objects - text & complete
// 2. creata function that takes array that allows you to remove a todo by text value & case insensitive



