
let clockInterval;

export function getDateTime(time){
    const [hours,minutes] = time.split(':').map(Number);
    const startDate = new Date();
    const newHour = parseInt(minutes)< 30 ? hours : hours+1;
    startDate.setHours(newHour);
    return startDate;
}

const updateClock = (clockDate) => {
    const clock = document.getElementById("clock");

    clockDate.setSeconds(clockDate.getSeconds()+1);

    const hours = String(clockDate.getHours()).padStart(2,'0');
    const minutes = String(clockDate.getMinutes()).padStart(2,'0');
    const seconds = String(clockDate.getSeconds()).padStart(2,'0');

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

const updateDate = (currentDate) => {
    const date = document.getElementById("date");
    date.innerText = currentDate;
}

export default function handleDateAndClockDisplay(dateTime,currentDate) {
    updateDate(currentDate);
    if(clockInterval) {
        clearInterval(clockInterval);
    }
    const clockDate = new Date(dateTime);
    clockInterval = setInterval(() => {updateClock(clockDate)},1000); 
}

