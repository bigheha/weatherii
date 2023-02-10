import './reset.css';
import './styles.css';
import setTime from './clock';
import renderHeader from './renderHeader';

setTimeout(function(){document.querySelector('html').classList.toggle('reveal')}, 1000);
async function getWeater() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Ternopil&units=metric&appid=${weatherKey}`,{mode:'cors'});
    const weatherInfo = await response.json();
}

renderHeader();
setTime();