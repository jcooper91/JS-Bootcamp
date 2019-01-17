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

for (let count = 0; count < todos.length; count++) {
    const num = count + 1;
    const todo = todos[count];
    console.log(`${num}. ${todo}`);
}

