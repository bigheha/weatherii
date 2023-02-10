const weatherKey = '8c705e01d56c4755ae5c8cb11ada00b5';

export default function renderHeader() {
    let lat;
    let lon;
    navigator.geolocation.getCurrentPosition(async (position) => {
        lat = await position.coords.latitude;
        lon = await position.coords.longitude;
        console.log(lat, lon);
    
        const infoPromise = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${weatherKey}`, {mode:'cors'});
        const cityPromise = fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=${weatherKey}`, {mode:'cors'});
        
        const [infoResponse, cityResponse] = await Promise.all([(await infoPromise), cityPromise]);

        const infoJson = infoResponse.json();
        const cityNameJson = cityResponse.json();

        const [info, cityName] = await Promise.all([infoJson, cityNameJson]);
    
        document.getElementById('localWeather').innerText = `${cityName[0].name} ${info.main.temp}°C ${info.main.humidity}%`;
        document.getElementById('localWeather').classList.toggle('hide');
        document.getElementById('localWeather').classList.toggle('reveal');
    })
}