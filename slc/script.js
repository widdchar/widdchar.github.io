//Toggle Menu Section

const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

//Last Modified Date
const lastMod = document.lastModified;
document.querySelector("#currentDate").textContent = lastMod;

const date = new Date();
const currentYear = date.getFullYear();
document.querySelector("#currentYear").textContent = currentYear;
