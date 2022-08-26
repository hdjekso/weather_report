var celsius = true;
var tempBtn = document.querySelector('button');
var API_key = "your_key_here";

async function fetchPA() {
  let link = "https://api.openweathermap.org/data/2.5/weather?lat=37.468319&lon=-122.143936&units=metric&appid=" + API_key;
  let res=await fetch (link);
  const record=await res.json();
  document.getElementById("PA-location").innerHTML=record.name + ", CA";
  let tempC = record.main.temp;
  let tempF = tempC * (9/5) + 32;
  if (celsius == true){
    document.getElementById("PA-temperature").innerHTML = tempC.toFixed(1) + " °C";
  }else{
    document.getElementById("PA-temperature").innerHTML = tempF.toFixed(1) + " °F";
  }
  document.getElementById("PA-description").innerHTML=record.weather[0].description;
  document.getElementById("PA-humidity").innerHTML=record.main.humidity + "%";
}

async function fetchUK() {
  let link = "https://api.openweathermap.org/data/2.5/weather?lat=51.5072&lon=0.1276&units=metric&appid=" + API_key;
  let res=await fetch (link);
  const record=await res.json();
  document.getElementById("UK-location").innerHTML="London, UK";
  let tempC = record.main.temp;
  let tempF = tempC * (9/5) + 32;
  if (celsius == true){
    document.getElementById("UK-temperature").innerHTML = tempC.toFixed(1) + " °C";
  }else{
    document.getElementById("UK-temperature").innerHTML = tempF.toFixed(1) + " °F";
  }
  document.getElementById("UK-description").innerHTML=record.weather[0].description;
  document.getElementById("UK-humidity").innerHTML=record.main.humidity + "%";
}

async function fetchJP() {
  let link = "https://api.openweathermap.org/data/2.5/weather?lat=35.6762&lon=139.6503&units=metric&appid=" + API_key;
  let res=await fetch (link);
  const record=await res.json();
  document.getElementById("JP-location").innerHTML="Tokyo, Japan";
  let tempC = record.main.temp;
  let tempF = tempC * (9/5) + 32;
  if (celsius == true){
    document.getElementById("JP-temperature").innerHTML = tempC.toFixed(1) + " °C";
  }else{
    document.getElementById("JP-temperature").innerHTML = tempF.toFixed(1) + " °F";
  }
  document.getElementById("JP-description").innerHTML=record.weather[0].description;
  document.getElementById("JP-humidity").innerHTML=record.main.humidity + "%";
}

async function fetchFR() { 
  let link = "https://api.openweathermap.org/data/2.5/weather?lat=48.8566&lon=2.3522&units=metric&appid=" + API_key;
  let res=await fetch (link);
  const record=await res.json();
  document.getElementById("FR-location").innerHTML="Paris, France";
  let tempC = record.main.temp;
  let tempF = tempC * (9/5) + 32;
  if (celsius == true){
    document.getElementById("FR-temperature").innerHTML = tempC.toFixed(1) + " °C";
  }else{
    document.getElementById("FR-temperature").innerHTML = tempF.toFixed(1) + " °F";
  }
  document.getElementById("FR-description").innerHTML=record.weather[0].description;
  document.getElementById("FR-humidity").innerHTML=record.main.humidity + "%";
}

async function fetchHK() {
  let link = "https://api.openweathermap.org/data/2.5/weather?lat=22.2873&lon=114.1903&units=metric&appid=" + API_key;
  let res=await fetch (link);
  const record=await res.json();
  document.getElementById("HK-location").innerHTML="Hong Kong";
  let tempC = record.main.temp;
  let tempF = tempC * (9/5) + 32;
  if (celsius == true){
    document.getElementById("HK-temperature").innerHTML = tempC.toFixed(1) + " °C";
  }else{
    document.getElementById("HK-temperature").innerHTML = tempF.toFixed(1) + " °F";
  }
  document.getElementById("HK-description").innerHTML=record.weather[0].description;
  document.getElementById("HK-humidity").innerHTML=record.main.humidity + "%";
}

function changeUnit(){
  if (celsius){
    // change to F
    celsius = false;
  }else{
    celsius = true;
  }
  fetchPA();
  fetchUK();
  fetchJP();
  fetchFR();
  fetchHK();
}

fetchPA();
fetchUK();
fetchJP();
fetchFR();
fetchHK();

tempBtn.onclick = () =>{
  changeUnit();
};


