import './reset.css';
import './styles.css';
import setTime from './clock';
import initialRender from './initialRender';
import getWeater from './getWeather';

setTimeout(function(){document.querySelector('html').classList.toggle('reveal')}, 1000);

initialRender();
setTime();

const searchWeatherform = document.getElementById('weather-search');
searchWeatherform.addEventListener('submit', (e) => {
    e.preventDefault();
    const city = document.getElementById('searchbar').value;
    getWeater(city);
})
async function what(){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=8c705e01d56c4755ae5c8cb11ada00b5`, {mode:'cors'});
    const info = await response.json();
    console.log(info);
}
what();