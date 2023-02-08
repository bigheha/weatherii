import './reset.css';
import './styles.css';
import setTime from './clock';

const weatherKey = '8c705e01d56c4755ae5c8cb11ada00b5';
async function getWeater() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Ternopil&units=metric&appid=${weatherKey}`,{mode:'cors'});
    const weatherInfo = await response.json();
}

var lat;
var lon;

navigator.geolocation.getCurrentPosition(async (position) => {
    lat = await position.coords.latitude;
    lon = await position.coords.longitude;
    console.log(lat, lon);

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${weatherKey}`, {mode:'cors'});
    const info = await response.json();

    const cityResponse = await fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=${weatherKey}`);
    console.log(cityResponse)
    const cityName = await cityResponse.json();
    console.log(cityName);
    document.getElementById('localWeather').innerText = `${cityName[0].name} ${info.main.temp}°C ${info.main.humidity}%`;
    document.getElementById('localWeather').classList.toggle('hide');
    document.getElementById('localWeather').classList.toggle('reveal');
})
getWeater();
setTime();