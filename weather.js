const API_KEY = "7b2cd414656e53bd65ccf81378f4d509";

function onGeoOk(position){
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(Response => Response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");

        city.innerHTML = data.name;
        weather.innerHTML = `${data.main.temp}°C / ${data.weather[0].main}`;
    });
}
function onGeoError(){
    alert("Can't find you!");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);