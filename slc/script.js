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

//Forecast
const forecastURL = `https://api.openweathermap.org/data/2.5/onecall?lat=40.761&lon=-111.891&exclude=minute,hourly&appid=999a399ab9c14e5416d862673ac547b0`;
fetch(forecastURL)
  .then((response) => response.json())
  .then((jsObject2) => {
    let day = 1;
    const dayofweek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    //reduce the list array to the five forecasts ... 40
    const threeDayForecast = jsObject2.list.filter( forecast => forecast.dt_txt.includes('18:00:00'));

    //Loop through each of the forecast days
    threeDayForecast.forEach( x => {
      let d = new Date(x.dt_txt);
      document.querySelector(`#day${day}`).textContent = dayofweek[d.getDay()];
      document.querySelector(`#temp${day}`).textContent = x.main.temp.toFixed(0);
      const imagesrc = 'https://openweathermap.org/img/wn/' + x.weather[0].icon + '.png';
      const desc = x.weather[0].description;
      document.querySelector(`#weathericon${day}`).setAttribute('src', imagesrc);
      document.querySelector(`#weathericon${day}`).setAttribute('alt', desc);
      day++
    });
  });
