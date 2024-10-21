

const API_KEY = "GQ9CS732CEKG55K85Y6JJ248D";

let result = {
    success: false,
    unit: "metric",
    data: null,
};


const getCurrentTime = async(timezone) => {
    /* const url = `https://worldtimeapi.org/api/timezone/${timezone}`; */
    const url = `https://timeapi.io/api/Time/current/zone?timeZone=${timezone}`;
    const response = await fetch(url);
    const data = await response.json();
    return new Date(data.dateTime);
}

export default async function fetchData(city,unit){
    const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(city)}?unitGroup=${unit}&include=current,hours,day&iconSet=icons2&key=${API_KEY}&contentType=json`;

    try {
        const response = await fetch(URL);

        if (!response.ok) {
            const errorData = await response.text();
            result.success = false;
            result.data = errorData.split(":").pop();
            return;
        }
        const data = await response.json();
        result.success = true;
        result.data = data;
        result.data.currentConditions.datetime = await getCurrentTime(data.timezone);
    } catch (error) {
        result.success = false;
        result.data = error.message;
    }
}

export function getRequestSucces() {
    return result.success;
}

export function getRequestResult() {
    return result.data;
}

export function setResultUnit(unit){
    result.unit = unit;
}

export function getResultUnit() {
    return result.unit;
}