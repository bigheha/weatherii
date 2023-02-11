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

const bookmarks =  document.querySelectorAll('.bookmark');

bookmarks.forEach(bookmark => bookmark.addEventListener('click', (e) => {
    const city = e.target.innerText;
    getWeater(city);
}));