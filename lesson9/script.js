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


/*******Weather Site Home Page **********/
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const towns = jsonObject["towns"];
    for (let i = 0; i < towns.length; i++ ) {
        if (i == 0 || i == 2 || i == 6) {
            let card = document.createElement('section');
            let cardDiv = document.createElement('div');
            cardDiv.setAttribute('class', "town-info");
            let h2 = document.createElement('h2');
            let motto = document.createElement('div');
            let yearFounded = document.createElement('p');
            let population = document.createElement('p');
            let rainfall = document.createElement('p');
            let townImage = document.createElement('img');
            
            h2.textContent = towns[i].name;
            motto.textContent = towns[i].motto;
            yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
            population.textContent = 'Population: ' + towns[i].currentPopulation;
            rainfall.textContent = 'Average Rainfall: ' + towns[i].averageRainfall;

            if (i == 0) {
              townImage.setAttribute('src', '../lesson9/images/soda-springs-home.jpg')
              townImage.setAttribute('alt', 'Image of ' + towns[i].name)
              card.setAttribute('id', 'soda-card')
            } 
            if (i == 2) {
              townImage.setAttribute('src', '../lesson9/images/fish-haven-home.jpg')
              townImage.setAttribute('alt', 'Image of ' + towns[i].name)
              card.setAttribute('id', 'fish-card')
            }
            if (i == 6) {
              townImage.setAttribute('src', '../lesson9/images/preston-home.jpg')
              townImage.setAttribute('alt', 'Image of ' + towns[i].name)
              card.setAttribute('id', 'preston-card')
            }
            cardDiv.appendChild(h2);
            cardDiv.appendChild(motto);
            cardDiv.appendChild(yearFounded);
            cardDiv.appendChild(population);
            cardDiv.appendChild(rainfall);
            card.appendChild(cardDiv);
            card.appendChild(townImage);        
        
        document.querySelector('div.home-cards').appendChild(card);
  }}});

