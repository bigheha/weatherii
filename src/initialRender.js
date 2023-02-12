const weatherKey = '8c705e01d56c4755ae5c8cb11ada00b5';

export default function initialRender() {
    let lat;
    let lon;
    navigator.geolocation.getCurrentPosition(async (position) => {
        lat = await position.coords.latitude;
        lon = await position.coords.longitude;
    
        const infoPromise = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${weatherKey}`, {mode:'cors'});
        const cityPromise = fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=${weatherKey}`, {mode:'cors'});
        
        const [infoResponse, cityResponse] = await Promise.all([infoPromise, cityPromise]);

        const infoJson = infoResponse.json();
        const cityNameJson = cityResponse.json();

        const [info, cityName] = await Promise.all([infoJson, cityNameJson]);
    
        document.getElementById('localWeather').innerText = `${cityName[0].name} ${info.main.temp}°C ${info.main.humidity}%`;
        document.getElementById('localWeather').classList.toggle('hide');
        document.getElementById('localWeather').classList.toggle('reveal');

        document.getElementById('cityName').innerText = cityName[0].name;
        document.getElementById('temp').innerText = `${info.main.temp}°C`;
        document.getElementById('humidity').innerText = `${info.main.humidity}%`;
        document.getElementById('pressure').innerText = `${info.main.pressure}hPa`;
        document.getElementById('speed').innerText = `${info.wind.speed}m/s`;
        document.getElementById('direction').innerText = `${info.wind.deg}°`;
        document.getElementById('gust').innerText = `${info.wind.gust}m/s`;

        if (!document.getElementById('info-wrapper').hasAttribute('data-state')) {
            document.getElementById('info-wrapper').setAttribute('data-state', 'initialized');
        };
        document.getElementById('info-wrapper').classList.toggle('hide');
        document.getElementById('info-wrapper').classList.toggle('reveal');
    })
}