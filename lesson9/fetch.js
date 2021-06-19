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
              townImage.setAttribute('src', '../lesson9/barn.jpg')
              townImage.setAttribute('alt', 'Image of ' + towns[i].name)
              card.setAttribute('id', 'soda-card')
            } 
            if (i == 2) {
              townImage.setAttribute('src', '../lesson9/lake.jpg')
              townImage.setAttribute('alt', 'Image of ' + towns[i].name)
              card.setAttribute('id', 'fish-card')
            }
            if (i == 6) {
              townImage.setAttribute('src', '../lesson9/field.jpg')
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