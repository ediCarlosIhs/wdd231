const imageIcon = document.querySelector("#weather-icon");
const weatherReport = document.querySelector("#weather-report");
const forecastSection = document.querySelector("#forecast");
const todayForecast = document.querySelector("#todayForecast");

let votorantimLatitude = -23.56;
let votorantimLongitude = -47.46;
let myAppid = '8d6f32d1036d29b599a2b482103f66f8';

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${votorantimLatitude}&lon=${votorantimLongitude}&appid=${myAppid}&units=metric`;

let queryString = `?lat=${votorantimLatitude}&lon=${votorantimLongitude}&appid=${myAppid}&units=metric`;

function getWeekDay(indexDay) {
	
		if (indexDay > 6) {
			indexDay = indexDay % 7;
		}
	
		return weekday[indexDay];
	
}

async function weatherApiFetch() {

    try {

        const response = await fetch(`${weatherUrl}${queryString}`);

        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayWeatherReport(data);
        } else {
            throw Error(await response.text())
        }

    } catch (error) {
        console.error("Error fetching weather", error);
    }

}

function getDateObject(forecastList, day) {

    const forecastObject = forecastList.find(forecast => {

        const forecastDate = new Date(forecast.dt * 1000);

        return forecastDate.getDate() === day.getDate();

    });

    return forecastObject.main.temp;
}

function displayForecast(forecastData) {

    forecastSection.innerHTML = "";

    console.log(forecastData);

     // updating today forecast section
     const mainTemp = document.querySelector("#main-temp");
     const mainTempSpan = document.querySelector("#main-temp span");

     todayForecast.innerHTML = `${mainTempSpan.textContent}&deg;C`;

     const today = new Date();
     const tomorrow = new Date();
     tomorrow.setDate(today.getDate() + 1);

     const dayAfterTomorrow = new Date();
     dayAfterTomorrow.setDate(today.getDate() + 2);

    //  console.log(tomorrowObject);

     const tomorrowP = document.createElement("p");
     tomorrowP.innerHTML = `${getWeekDay(tomorrow.getDay())}: <span class="highlight">${getDateObject(forecastData.list, tomorrow)}&deg;C</span>`;

     const dayAfterTomorrowP = document.createElement("p");
     dayAfterTomorrowP.innerHTML = `${getWeekDay(dayAfterTomorrow.getDay())}: <span class="highlight">${getDateObject(forecastData.list, dayAfterTomorrow)}&deg;C</span>`;

     forecastSection.appendChild(tomorrowP);
     forecastSection.appendChild(dayAfterTomorrowP);

}

function displayWeatherReport(weatherData) {

    weatherReport.innerHTML = "";

    const mainTemp = document.createElement("p");
    mainTemp.setAttribute("id", "main-temp");
    mainTemp.setAttribute("data-timestamp", weatherData.dt);
    mainTemp.innerHTML = `<span class="highlight">${weatherData.main.temp}</span>&deg; C`;

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

    return data.toLocaleTimeString('pt-Br', {hour: "numeric", minute: '2-digit', hour12: true}).toLowerCase().replace(" ", "");

}

async function forecastApiFetch() {

    try {
        const response = await fetch(forecastUrl);

        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayForecast(data);
        }
        else {
            throw Error(await response.text());
        }

    } catch (error) {
        console.error("Error fetching weather", error);
    }

}

weatherApiFetch();
forecastApiFetch();
