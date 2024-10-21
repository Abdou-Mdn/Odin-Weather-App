import { getRequestResult } from "./FetchData";

let hourlyForecast = [];

const extractHourlyForecast = () => {
    const data = getRequestResult();
    const hourlyData = data.days[0].hours.concat(data.days[1].hours);
    const currentHour = new Date().getHours();
    const next24hours = hourlyData.slice(currentHour,currentHour+24);

    hourlyForecast = next24hours.map((hour) => ({
            time: hour.datetime.slice(0,5),
            icon: hour.icon,
            temperature: hour.temp   
    }));
}

export default function getHourlyForecast() {
    extractHourlyForecast();
    return hourlyForecast;
}