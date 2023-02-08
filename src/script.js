import './reset.css';
import './styles.css';
import setTime from './clock';

async function getWeater() {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Ternopil&units=metric&appid=8c705e01d56c4755ae5c8cb11ada00b5',{mode:'cors'});
    const weatherInfo = await response.json();
    console.log(weatherInfo);
}


getWeater();
setTimeout(function(){setTime()}, 1000);