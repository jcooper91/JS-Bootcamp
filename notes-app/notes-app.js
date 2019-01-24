const p = document.querySelector('p');
const ps = document.querySelectorAll('p');
ps.forEach(function(p) {
    p.innerText = '****';
    // p.remove();
})
