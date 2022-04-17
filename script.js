let inputCity = document.getElementById('inputCity');
let search = document.getElementById('searchBtn');
let dispCityName = document.getElementById('dispCityName');
let dispConditionImg = document.getElementById('dispConditionIMG');
let dispTemp = document.getElementById('dispTemp');
let dispMinMaxTemp = document.getElementById('dispMinMaxTemp');
let dispWeatherType=document.getElementById('dispWeatherType');

let apiKey = '3807388226fc847a7052613ffccc630f';
let city = 'Delhi';
search.addEventListener('click', getInputCityData);
function getInputCityData() {
    city = inputCity.value;
    inputCity.value = "";
    const data = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(data)
        .then((response) => { return response.json() })
        .then((data) => {
            console.log(data);
            dispCityName.innerText = city;
            dispConditionImg.src=`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            dispWeatherType.innerText=data.weather[0].main;
            dispTemp.innerText = data.main.temp + '°C';
            dispMinMaxTemp.innerText = 'min ' + data.main.temp_min + '°C | max ' + data.main.temp_max + '°C';
        })
        .catch((data)=>{
            dispCityName.innerText = 'City Not Found';
            dispConditionImg.src=`https://i.ibb.co/3F5Kk1p/emjiNrml.gif`;
            dispConditionImg.style.cssText='height:20vh;'
            dispTemp.innerText ='°C';
            dispMinMaxTemp.innerText = 'min °C | max °C';
        })
}

const data = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
fetch(data)
    .then((response) => { return response.json() })
    .then((data) => {
        console.log(data);
        dispCityName.innerText = city;
        dispConditionImg.src=`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        dispWeatherType.innerText=data.weather[0].main;
        dispTemp.innerText = data.main.temp + '°C';
        dispMinMaxTemp.innerText = 'min ' + data.main.temp_min + '°C | max ' + data.main.temp_max + '°C';
    });
