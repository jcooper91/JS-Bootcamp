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

const inCompleteTodos = todos.filter(function(todo) {
    return !todo.complete;
}) 

const summary = document.createElement('h2');
summary.innerText = `You have ${inCompleteTodos.length} todo's left`;
document.querySelector('body').appendChild(summary);


todos.forEach(function(todo) {
    const todoPara = document.createElement('p');
    todoPara.innerHTML = todo.text;
    document.querySelector('body').appendChild(todoPara);
    console.log(todo.text)
})

// you have two todos left ni a paragraph tag
// print a paragraph for each todo above (use text value for the object)










// const ps = document.querySelectorAll('p');

// ps.forEach(function(p) {
//     if(p.textContent.includes('the')) {
//         p.remove();
//     }
// })