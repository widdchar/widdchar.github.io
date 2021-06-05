//Toggle Menu Section

const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

let a = new Date();
let b = new Date();
localStorage.a = a;
localStorage.b = b;
a = Date.parse(localStorage.a);
b = Date.parse(localStorage.b);
let daysSinceLastVisit = b - a;
console.log(daysSinceLastVisit);

document.querySelector('#days').textContent = daysSinceLastVisit