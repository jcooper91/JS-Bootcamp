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

document.querySelector('button').addEventListener('click', function(e) {
    console.log('Hey, you clicked the button!');
})

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












// const ps = document.querySelectorAll('p');

// ps.forEach(function(p) {
//     if(p.textContent.includes('the')) {
//         p.remove();
//     }
// })