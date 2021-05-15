//Toggle Menu Section

function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("hide"); 
}

//Date Section

const datefield = document.querySelector("date");

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(
	now
);

datefield.innerHTML = `<em>${fulldate}</em>`;