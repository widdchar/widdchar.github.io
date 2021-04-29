const lastMod = document.lastModified;
document.querySelector("#currentDate").textContent = lastMod;

const date = new Date();
const currentYear = date.getFullYear();
document.querySelector("#currentYear").textContent = currentYear;