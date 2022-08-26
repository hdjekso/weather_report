var celsius = true;
var tempBtn = document.querySelector('button');
var API_key = "your_api_key_here";

async function fetchCountry(lat, lon, location, name){
    let link = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=metric&appid=" + API_key;
    //let link = website + API_key;
    let res=await fetch (link);
    const record=await res.json();
    document.getElementById(location + "-location").innerHTML= name;
    let tempC = record.main.temp;
    let tempF = tempC * (9/5) + 32;
    if (celsius == true){
      document.getElementById(location + "-temperature").innerHTML = tempC.toFixed(1) + " °C";
    }else{
      document.getElementById(location + "-temperature").innerHTML = tempF.toFixed(1) + " °F";
    }
    document.getElementById(location + "-description").innerHTML=record.weather[0].description;
    document.getElementById(location + "-humidity").innerHTML=record.main.humidity + "%";
}

fetchCountry("37.437109", "-122.124402", "PA", "Palo Alto, CA");
fetchCountry("51.5072", "0.1276", "UK", "London, UK");
fetchCountry("35.6762", "139.6503", "JP", "Tokyo, Japan");
fetchCountry("48.8566", "2.3522", "FR", "Paris, France");
fetchCountry("22.2873", "114.1903", "HK", "Hong Kong");

function changeUnit(){
  if (celsius){
    // change to F
    celsius = false;
  }else{
    celsius = true;
  }
  fetchCountry("37.437109", "-122.124402", "PA", "Palo Alto, CA");
  fetchCountry("51.5072", "0.1276", "UK", "London, UK");
  fetchCountry("35.6762", "139.6503", "JP", "Tokyo, Japan");
  fetchCountry("48.8566", "2.3522", "FR", "Paris, France");
  fetchCountry("22.2873", "114.1903", "HK", "Hong Kong");
}


tempBtn.onclick = () =>{
  changeUnit();
};


