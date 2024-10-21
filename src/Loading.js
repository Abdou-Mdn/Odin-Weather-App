import { hideContent, hideError } from "./Display";

const loadingIcon = document.getElementById("loadingIcon");
const loadingScreen = document.getElementById("loading");

const icons = [
    "clear-day", "clear-night", "partly-cloudy-day","partly-cloudy-night",
    "cloudy-day","cloudy-night","rain-day","rain-night"];

let currentIndex = 0;

const changeIcon = () => {
    currentIndex = (currentIndex + 1) % icons.length;
    loadingIcon.src = `icons/${icons[currentIndex]}.svg`;
}


export function displayLoading() {
    hideContent();
    hideError();
    loadingScreen.classList.add("active");
    setInterval(changeIcon,2000);  
}

export function hideLoading() {
    loadingScreen.classList.remove("active");
}