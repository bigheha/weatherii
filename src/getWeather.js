export default async function getWeater(city) {
    document.getElementById('content').classList.toggle('reveal');
    document.getElementById('content').classList.toggle('hide');

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=8c705e01d56c4755ae5c8cb11ada00b5`, {mode:'cors'});
    const info = await response.json();
    setTimeout(() => {
        document.getElementById('cityName').innerText = city;
        document.getElementById('temp').innerText = `${info.main.temp}°C`;
        document.getElementById('humidity').innerText = `${info.main.humidity}%`;
        document.getElementById('pressure').innerText = `${info.main.pressure}hPa`;
        document.getElementById('speed').innerText = `${info.wind.speed}m/s`;
        document.getElementById('direction').innerText = `${info.wind.deg}°`;
        document.getElementById('gust').innerText = `${info.wind.gust}m/s`;
        if (info.wind.gust == undefined) {
            document.getElementById('gust').innerText = 'no info';
        }
    }, 400);

    setTimeout(() => {
        document.getElementById('content').classList.toggle('reveal');
        document.getElementById('content').classList.toggle('hide');
    }, 500); 
}