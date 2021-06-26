//Toggle Menu Section

const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};


// derive the current date using a date object
const now = new Date(); 

const fulldate = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(
	now);

document.getElementById("date").innerHTML=fulldate

//Banner
let thedate = new Date ();

    if (thedate.getDay() == 5) {
    document.querySelector('#banner').style.display = "block";
    }
    else {
       document.querySelector('#banner').style.display = 'none';
    }

//Wind Chill
let temp = document.querySelector(".temp").innerHTML;
let speed = document.querySelector(".wind-speed").innerHTML;

if ((temp <= 50) && (speed >3)) {
    let result = windChill(temp, speed)
    document.querySelector(".wind-chill").innerHTML = result.toFixed(0);

}

else {
    document.querySelector(".wind-chill").innerHTML = "N/A";
}

function windChill(temp, speed) {
    let f = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));
    return f
}

//Web Fontload
WebFont.load({google: {families: ['Montserrat']}});


/*************Storm Center Page *************/
stormSlider = document.querySelector("#storm-slider");
stormOutput = document.querySelector("#storm-output");
stormOutput.textContent - stormSlider.value;

stormSlider.oninput = () => {
    stormOutput.textContent = stormSlider.value;
};