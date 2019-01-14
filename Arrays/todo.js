const todos = ['play piano', 'code', 'cook', 'run', 'sleep'];
// delete third item
// add new item to end
// remove first item from list

// todos.splice(2, 1);
// todos.push('eat');
// todos.shift();

todos.forEach(function (item, index) {
    let num = index + 1;
    console.log(`${num}. ${item}`);
})

console.log(todos);

