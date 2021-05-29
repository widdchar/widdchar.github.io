const temp = document.querySelector(".temp").innerHTML;
const windSpeed = docment.querySelector(".wind-speed").innerHTML;
const windChill = document.querySelector(".wind-chill");

if (temp <= 50 && windSpeed >3) {
    windChillFactir(temp, windSpeed);
} else{
    windChill.textContent = "N/A";
}

function windChillFactir(temp, windSpeed) {
    const windChillFormula = 
        35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16);
    windChill.innerHTML = '${windChillFormula.toFixed(0)}&deg;F';
}