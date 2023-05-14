const  apiKey = '&appid=2aa928993b3f024497c3abf7292bd1af';
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&units=metric&q=";
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherPic = document.querySelector('#weathImg');

async function checkweather(city){
    const response = await fetch(apiUrl + city + apiKey);
    var data  = await response.json();
  

document.querySelector('.temp').innerHTML=(Math.round(data.main.temp))+'°C';
document.querySelector('.city').innerHTML=(data.name);
document.querySelector('.humidity').innerHTML=(data.main.humidity+"%");
document.querySelector('.wind').innerHTML=(data.wind.speed+" km/h");

if(data.weather[0].main == "Clouds"){
    weatherPic.src = "./images/clouds.png";
} 
else if(data.weather[0].main == "Rain"){
    weatherPic.src = "./images/rain.png";
}
else if(data.weather[0].main == "Drizzle"){
    weatherPic.src = "./images/drizzle.png";
}
else if(data.weather[0].main == "Clear"){
    weatherPic.src = "./images/clear.png";
}
else if(data.weather[0].main == "Mist"){
    weatherPic.src = "./images/mist.png";
}
}

searchBtn.addEventListener('click', ()=>{
    checkweather(searchBox.value);
})


