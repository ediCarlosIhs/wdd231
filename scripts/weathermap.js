const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const cityName = document.querySelector("#city-name");

const url = 'https://api.openweathermap.org/data/2.5/weather';

let trierGermanyLatitude = -23.56;
let trierGermanyLongitude = -47.46;
let myAppid = '8d6f32d1036d29b599a2b482103f66f8';

// -23.564831326231396, -47.460376923232054

let queryString = `?lat=${trierGermanyLatitude}&lon=${trierGermanyLongitude}&appid=${myAppid}&units=metric`;

async function apiFetch() {

    try {
        const response = await fetch(`${url}${queryString}`);

        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error("Error fetching weather", error);
    }
}

function displayResults(weatherData) {

    cityName.textContent = weatherData.name;

    currentTemp.innerHTML = `${weatherData.main.temp}&deg;C`;

    const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`;
    let description = weatherData.weather[0].description;


    weatherIcon.setAttribute("src", iconsrc);

    weatherIcon.setAttribute("alt", description);

    captionDesc.textContent = description;

}

apiFetch();