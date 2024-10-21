import { getRequestResult } from "./FetchData";

let currentWeather = {};


const extractCurrentWeather = () => {
    const data = getRequestResult();
    currentWeather = {
        cityName: data.resolvedAddress,
        date: data.days[0].datetime,
        dateTime: data.currentConditions.datetime,
        temp: data.currentConditions.temp,
        condition: data.currentConditions.conditions,
        icon: data.currentConditions.icon,
        humidity: data.currentConditions.humidity,
        windSpeed: data.currentConditions.windspeed,
        highTemp: data.days[0].tempmax,
        sunrise: data.currentConditions.sunrise,
        sunset: data.currentConditions.sunset,
    }
}

export default function getCurrentWeather () {
    extractCurrentWeather();
    return currentWeather;
}
