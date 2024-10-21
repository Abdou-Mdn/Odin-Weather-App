import getCurrentWeather from "./CurrentWeather"
import getHourlyForecast from "./HourlyForcast"
import getWeeklyForecast from "./WeeklyForecast"
import handleDateAndClockDisplay from "./DateAndClock"
import { changeColors, isDayOrNight } from "./DayNightTheme"
import selectIcon from "./IconSelection"
import { getRequestResult, getResultUnit } from "./FetchData"
import { hideLoading } from "./Loading"

const contentDiv = document.getElementById("content");
const errorDiv = document.getElementById("error");

const displayData = () => {
    const unit = getResultUnit();
    displayCurrentWeather(unit);
    displayHourlyForecast();
    displayWeeklyForecast();
}

const displayCurrentWeather = (unit) => {
    const currentWeather = getCurrentWeather();
    const period = isDayOrNight(currentWeather.dateTime,true);
    changeColors(period);
    handleDateAndClockDisplay(currentWeather.dateTime,currentWeather.date);

    const cityName = document.getElementById("cityName")
    cityName.innerText = currentWeather.cityName;
    
    const weatherIcon = document.getElementById("currentWeatherIcon");
    weatherIcon.src = selectIcon(currentWeather.icon,period);

    const temperature = document.getElementById("temperature");
    temperature.innerHTML = `<h2>${currentWeather.temp}&deg;</h2><span>${currentWeather.condition}</span>`;

    const humidity = document.getElementById("humidityInfo");
    humidity.innerText = `${currentWeather.humidity}%`

    const windspeed = document.getElementById("windSpeed");
    windspeed.innerText = `${currentWeather.windSpeed} ${unit === "metric" ? "Kph" : "Mph"}`;

    const highTemp = document.getElementById("highTemp");
    highTemp.innerHTML = `${currentWeather.highTemp}&deg;`;

    const sunrise = document.getElementById("sunriseTime");
    const sunriseTime = currentWeather.sunrise.slice(0,5);
    sunrise.innerText = sunriseTime;

    const sunset = document.getElementById("sunsetTime");
    const sunsetTime = currentWeather.sunset.slice(0,5);
    sunset.innerText = sunsetTime;

}

const displayHourlyForecast = () => {
    const hourlyForecast = getHourlyForecast();
    const hourlyForecastUL = document.getElementById("hourlyForecast");

    hourlyForecast.map((hour,index) => {
        const li = document.createElement("li");

        const time = document.createElement("span");
        time.className = "time";
        time.innerText = index === 0 ? "Now" : hour.time;
        li.appendChild(time);

        const period = isDayOrNight(hour.time,false);
        const icon = document.createElement("img");
        icon.className = "icon";
        icon.src = selectIcon(hour.icon,period);
        li.appendChild(icon);

        const temperature = document.createElement("span");
        temperature.className = "degree";
        temperature.innerHTML = `${hour.temperature}&deg;`;
        li.appendChild(temperature);

        hourlyForecastUL.appendChild(li);
    });
}


const displayWeeklyForecast = () => {
    const weeklyForecast = getWeeklyForecast();
    const weeklyForecastUL = document.getElementById("weeklyForecast");

    weeklyForecast.map((day) => {
        const li = document.createElement("li");

        const dayName = document.createElement("span");
        dayName.className = "day";
        dayName.innerText =  day.day;
        li.appendChild(dayName);

        const icon = document.createElement("img");
        icon.className = "icon";
        icon.src = selectIcon(day.icon,"day");
        li.appendChild(icon);

        const temperature = document.createElement("span");
        temperature.className = "degree";
        temperature.innerHTML = `${day.temperature}&deg;`;
        li.appendChild(temperature);

        weeklyForecastUL.appendChild(li);
    });
}

const displayErrorMessage = () => {
    const message = getRequestResult();
    const error = document.getElementById("errorMessage");
    error.innerText = message; 
}

export function hideContent() {
    contentDiv.classList.remove("active");
}

export function hideError() {
    errorDiv.classList.remove("active");
}

export function displayContent() {
    hideError();
    hideLoading();
    contentDiv.classList.add("active");
    displayData();
}

export function displayError() {
    hideContent();
    hideLoading();
    errorDiv.classList.add("active");
    displayErrorMessage();
}