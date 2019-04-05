// let myAge = 27
// const message = myAge >= 18 ? 'You can vote' : 'You cannot vote'
// console.log(message);

const myAge = 27

const showPage = () => {
    console.log('Showing page')
}

const showErrorPage = () => {
    console.log('Showing error page');
}

const message = myAge >= 18 ? showPage() : showErrorPage() 
// console.log(message);

const team = ['Tyler', 'Simon']
const teamSize = team.length <= 4 ? `Team Size: ${team.length}` : 'Too many people on your team'
console.log(teamSize)
