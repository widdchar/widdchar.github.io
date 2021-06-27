const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=999a399ab9c14e5416d862673ac547b0&units=imperial";

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

fetch(apiURL)
  .then((response) => response.json())
  .then((forecast) => {
    console.log(forecast);
    document.getElementById("current-temp").textContent = Math.round(
      forecast.list[0].main.temp
    );
    // Iterate over the object list
    for (let x in forecast.list) {
      // Check if the object is the data taken at 6pm
      if (forecast.list[x].dt_txt.includes("18:00:00")) {
        // Create the parent container, "day-box"
        let dayBox = document.createElement("div");
        dayBox.setAttribute("class", "day-box");
        // Get the day of the week and append that first
        let weekDay = document.createElement('div');
        weekDay.setAttribute('class', 'week-day');
        let dayOfWeek = new Date(forecast.list[x].dt_txt);
        let dayNum = dayOfWeek.getDay();
        weekDay.textContent = weekdays[dayNum];
        dayBox.appendChild(weekDay);
        // Create a child element to hold the temperature for the day
        let foreTemp = document.createElement("p");
        foreTemp.setAttribute("class", "fore-temp");
        foreTemp.innerHTML = Math.round(forecast.list[x].main.temp_max) + " &deg;F";
        dayBox.appendChild(foreTemp);
        // Create a child element to get the icon for the forecasted weather
        let weatherIcon = document.createElement('img');
        const imagesrc = 'https://openweathermap.org/img/w/' + forecast.list[x].weather[0].icon + '.png';
        const desc = forecast.list[x].weather.description;
        weatherIcon.setAttribute('class', 'weather-icon');
        weatherIcon.setAttribute('src', imagesrc);
        weatherIcon.setAttribute('alt', desc);
        dayBox.appendChild(weatherIcon);
        // Append the "day-box" to the parent section in the HTML
        document.querySelector(".forecast-test").appendChild(dayBox);
      }
    }
  });

//fetch(apiURL)
//  .then((response) => response.json())
//  .then((jsObject) => {
//    console.log(jsObject);

//    document.getElementById('current-temp').textContent = jsObject.list[0].main.temp;

//    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[0].weather[0].icon + '.png';  // note the concatenation
//    const desc = jsObject.list[0].weather[0].description;  // note how we reference the weather array
//    document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
//    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
//    document.getElementById('icon').setAttribute('alt', desc);
//  });

