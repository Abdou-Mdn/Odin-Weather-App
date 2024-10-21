import { getRequestResult } from "./FetchData";

let weeklyForecast = [];

const extractWeeklyForecast = () => {
    const data = getRequestResult();
    const next7days = data.days.slice(0,7);
    
    weeklyForecast = next7days.map((day,index) => {
        const date = new Date(day.datetime);
        const dayName = index === 0 ? "Today" : date.toLocaleDateString('en-Us',{weekday: 'long'});
        
        return {
            day: dayName,
            icon: day.icon,
            temperature: day.temp
        }
    });
}

export default function getWeeklyForecast() {
    extractWeeklyForecast();
    return weeklyForecast;
}