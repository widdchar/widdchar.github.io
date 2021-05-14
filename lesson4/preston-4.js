//Toggle Menu Section

function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("hide"); 
}

//Date Section

const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

const date = new Date();
const dayOfMonth = date.getDate();
const year = date.getFullYear();
const day = days[date.getDay()];
const month = months[date.getMonth()];
const currentDate = '${day}, ${dayOfMonth} ${month} ${year}';

document.querySelector('#currentYear').innerHTML = year;
document.querySelector('#currentDate').innerHTML = currentDate;