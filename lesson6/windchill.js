//const temp = document.querySelector(".temp").innerHTML;
//const windSpeed = document.querySelector(".wind-speed").innerHTML;
//const windChill = document.querySelector(".wind-chill");

//if ((temp <= 50) && (windSpeed >3)) {
//    windChillFactor(temp, windSpeed);
//} else{
//    windChill.textContent = "N/A";
//}

//function windChillFactor(temp, windSpeed) {
//    const windChillFormula = 
//        35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16);
//    windChill.innerHTML = '${windChillFormula.toFixed(0)}';
//}

let temp = document.querySelector(".temp").innerHTML;
let speed = document.querySelector(".wind-speed").innerHTML;

if ((tem <= 50) && (speed >3)) {
    let result = wind-chill(temp, speed)
    document.querySelector(".wind-chill").innerHTML = result.toFixed(0);

}

else {
    document.querySelector(".wind-chill").innerHTML = "N/A";
}

function windChill(temp, speed) {
    let f = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * twmp * Math.pow(speed, 0.16));
    return f
}
