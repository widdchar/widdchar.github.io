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

//Weather API

const fiveDayURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=999a399ab9c14e5416d862673ac547b0&units=imperial";

fetch(prestonURL)
  .then((response) => response.json())
  .then((jsObject) => {
    const temp = jsObject.main.temp;
    document.getElementById("current-temp").textContent = temp.toFixed(0);

    const currentWeather = jsObject.weather[0].main;
    document.getElementById("description").textContent = currentWeather;

    const highTemp = jsObject.main.temp_max;
    document.getElementById("high-temp").textContent = highTemp.toFixed(0);

    const lowTemp = jsObject.main.temp_min;
    document.getElementById("low-temp").textContent = lowTemp.toFixed(0);

    const humidity = jsObject.main.humidity;
    document.getElementById("humidity").textContent = humidity;

    const windSpeed = jsObject.wind.speed;
    document.querySelector(".wind-speed").textContent = windSpeed.toFixed(0);

    windChillFactor(temp, windSpeed);
  });

// //////// Forecast API ////////////////
const prestonForecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=836d037508b2397deaea6c8b8b8b90d9";

fetch(prestonForecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
    const dataLists = jsObject.list;

    for (data of dataLists) {
      if (data.dt_txt.includes("18:00:00")) {
        // Create a forecast box(card) to contain 5day forecast information
        const forecastBox = document.createElement("div");
        forecastBox.classList.add("forecast-box");

        const dayOfWeek = document.createElement("div");
        dayOfWeek.classList.add("day");
        const days = new Date(data.dt_txt);
        dayOfWeek.textContent = days.toString().slice(0, 3);
        forecastBox.appendChild(dayOfWeek);

        const image = document.createElement("img");
        image.setAttribute(
          "src",
          "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"
        );
        image.setAttribute("alt", data.weather[0].description);
        forecastBox.appendChild(image);

        const forecastTemp = document.createElement("div");
        forecastTemp.innerHTML = data.main.temp.toFixed(0) + "&deg;F";
        forecastBox.appendChild(forecastTemp);

        const forecast = document.querySelector(".forecast-container");
        forecast.appendChild(forecastBox);
      }
    }
  });

  //Fish Haven Events//
  const eventURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(eventURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    console.table(jsonObject);
    const towns = jsonObject["towns"];
    for (let i = 0; i < towns.length; i++) {
      if (i == 2) {
        let fishEvent = document.createElement("p");
        let secondFishEvent = document.createElement("p");
        let thirdFishEvent = document.createElement("p");
        let fourthFishEvent = document.createElement("p");

        fishEvent.textContent = towns[i].events[0];
        secondFishEvent.textContent = towns[i].events[1];
        thirdFishEvent.textContent = towns[i].events[2];
        fourthFishEvent.textContent = towns[i].events[3];

        let fishEventsBox = document.querySelector(".fish-events");

        fishEventsBox.appendChild(fishEvent);
        fishEventsBox.appendChild(secondFishEvent);
        fishEventsBox.appendChild(thirdFishEvent);
        fishEventsBox.appendChild(fourthFishEvent)
      }
    }
  });

  //Soda Springs Events//
  fetch(eventURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    console.table(jsonObject);
    const towns = jsonObject["towns"];
    for (let i = 0; i < towns.length; i++) {
      if (i == 0) {
        let sodaEvent = document.createElement("p");
        let secondSodaEvent = document.createElement("p");
        let thirdSodaEvent = document.createElement("p");

        sodaEvent.textContent = towns[i].events[0];
        secondSodaEvent.textContent = towns[i].events[1];
        thirdSodaEvent.textContent = towns[i].events[2];

        let sodaEventsBox = document.querySelector(".soda-events");

        sodaEventsBox.appendChild(sodaEvent);
        sodaEventsBox.appendChild(secondSodaEvent);
        sodaEventsBox.appendChild(thirdSodaEvent);
      }
    }
  });

  //Preston Events//
  const eventURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(eventURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    console.table(jsonObject);
    const towns = jsonObject["towns"];
    for (let i = 0; i < towns.length; i++) {
      if (i == 6) {
        let prestonEvent = document.createElement("p");
        let secondPrestonEvent = document.createElement("p");
        let thirdPrestonEvent = document.createElement("p");

        prestonEvent.textContent = towns[i].events[0];
        secondPrestonEvent.textContent = towns[i].events[1];
        thirdPrestonEvent.textContent = towns[i].events[2];

        let prestonEventsBox = document.querySelector(".preston-events");

        prestonEventsBox.appendChild(prestonEvent);
        prestonEventsBox.appendChild(secondPrestonEvent);
        prestonEventsBox.appendChild(thirdPrestonEvent);
      }
    }
  });