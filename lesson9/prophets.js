const requestURL =
  "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";

fetch(requestURL)
  .then((response) => response.json())
  .then((jsonObject) => {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const prophets = jsonObject["prophets"];
    for (let i = 0; i < prophets.length; i++) {
      const card = document.createElement("section");
      const h2 = document.createElement("h2");
      const para1 = document.createElement("p");
      const para2 = document.createElement("p");
      const para3 = document.createElement("p");
      const img = document.createElement("img");

      h2.textContent = prophets[i].name + " " + prophets[i].lastname;
      para1.textContent = "Date of Birth: " + prophets[i].birthdate;
      para2.textContent = "Date of Death: " + prophets[i].death;
      para3.textContent = "Place of Birth: " + prophets[i].birthplace;
      img.setAttribute("src", prophets[i].imageurl);
      img.setAttribute(
        "alt",
        prophets[i].name + " " + prophets[i].lastname + "-" + [i + 1]
      );

      card.appendChild(h2);
      card.appendChild(para1);
      card.appendChild(para2);
      card.appendChild(para3);
      card.appendChild(img);
      document.querySelector("div.cards").appendChild(card);
    }
  });