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

let deleteTodo = function (todos, itemToDelete) {
    let todo = todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === itemToDelete.toLowerCase();
    })
    if (todo > -1) {
        todos.splice(todo, 1);
    }

}
deleteTodo(todos, 'cook');
console.log(todos);

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



