import getCurrentWeather from "./CurrentWeather";
import { getDateTime } from "./DateAndClock";

export function isDayOrNight(time,isObject) {
    const {sunrise, sunset} = getCurrentWeather();

    let currentTime;
    if(isObject) {
        currentTime = time.getTime();
    }else {
        currentTime = getDateTime(time).getTime(); 
    }
    

    const [sunriseH,sunriseM,sunriseS] = sunrise.split(':');
    const sunriseT = new Date();
    sunriseT.setHours(sunriseH);
    sunriseT.setMinutes(sunriseM);
    const sunriseTime = sunriseT.setSeconds(sunriseS);
    
    const [sunsetH,sunsetM,sunsetS] = sunset.split(':');
    const sunsetT = new Date();
    sunsetT.setHours(sunsetH);
    sunsetT.setMinutes(sunsetM);
    const sunsetTime = sunsetT.setSeconds(sunsetS);


    return (currentTime >= sunriseTime && currentTime < sunsetTime) ? "day" : "night";
}

export function changeColors (period) {
    
    const root = document.documentElement;
    if (period === "night"){
        root.style.setProperty("--BG-COLOR-1","linear-gradient(to bottom right,#003366,#001f3f)");
        root.style.setProperty("--BG-COLOR-2","#0F2836")
        root.style.setProperty("--BG-COLOR-3","linear-gradient(to top left,#272746,#37374d)");
        root.style.setProperty("--ACTION-COLOR","linear-gradient(to top right,#280044,#3f016c)");
        root.style.setProperty("--TEXT-COLOR","#fff");
    }else {
        root.style.setProperty("--BG-COLOR-1","linear-gradient(to bottom right,#00c6ff,#0072ff)");
        root.style.setProperty("--BG-COLOR-2","#d8f4fc");
        root.style.setProperty("--BG-COLOR-3","linear-gradient(to top left,#e9e9e9,#ffffff)");
        root.style.setProperty("--ACTION-COLOR","linear-gradient(to top right,#ffaa00,#ffd700)");
        root.style.setProperty("--TEXT-COLOR","#000");
    }

}
