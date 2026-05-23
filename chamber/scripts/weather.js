const imageIcon = document.querySelector("#weather-icon");
const weatherReport = document.querySelector("#weather-report");
const forecast = document.querySelector("#forecast");

let votorantimLatitude = -23.56;
let votorantimLongitude = -47.46;
let myAppid = '8d6f32d1036d29b599a2b482103f66f8';

const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${votorantimLatitude}&lon=${votorantimLongitude}&appid=${myAppid}&units=metric`;

let queryString = `?lat=${votorantimLatitude}&lon=${votorantimLongitude}&appid=${myAppid}&units=metric`;

async function weatherApiFetch() {

    try {

        const response = await fetch(`${weatherUrl}${queryString}`);

        if (response.ok) {
            const data = await response.json();
            displayWeatherReport(data);
        } else {
            throw Error(await response.text())
        }

    } catch (error) {
        console.error("Error fetching weather", error);
    }

}

function displayWeatherReport(weatherData) {

    weatherReport.innerHTML = "";

    const mainTemp = document.createElement("p");
    mainTemp.innerHTML = `<span class="highlight">${weatherData.main.temp}</span>&deg C`;

    const weatherDescription = document.createElement("p");
    weatherDescription.textContent = weatherData.weather[0].description;

    const highTemp = document.createElement("p");
    highTemp.textContent = `High: ${weatherData.main.temp_max}º`;

    const lowTemp = document.createElement("p");
    lowTemp.textContent = `Low: ${weatherData.main.temp_min}º`;

    const humidity = document.createElement("p");
    humidity.textContent = `Humidity: ${weatherData.main.humidity}%`

    // sunrise and sunset code
    const sunriseTimestamp = weatherData.sys.sunrise;
    const sunsetTimestamp = weatherData.sys.sunset;

    const sunrise = document.createElement("p");
    sunrise.textContent = `Sunrise: ${formatTimestamp(sunriseTimestamp)}`;

    const sunset = document.createElement("p");
    sunset.textContent = `Sunset: ${formatTimestamp(sunsetTimestamp)}`;

    weatherReport.appendChild(mainTemp);
    weatherReport.appendChild(weatherDescription);
    weatherReport.appendChild(highTemp);
    weatherReport.appendChild(lowTemp);
    weatherReport.appendChild(humidity);
    weatherReport.appendChild(sunrise)
    weatherReport.appendChild(sunset);

}

function formatTimestamp(timestamp) {

    const data = new Date(timestamp * 1000);

    return data.toLocaleTimeString('pt-Br', {hour: '2-digit', minute: '2-digit', hour12: true});

}


async function forecastApiFetch() {

    try {
        const response = await fetch(forecastUrl);

        if (response.ok) {
            const data = await response.json();
            console.log(data);
        }

    } catch (error) {
        console.error("Error fetching weather", error);
    }

}

weatherApiFetch();
forecastApiFetch();