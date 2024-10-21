import handleFormSubmission from "./FormSubmission";

const toggleBtn = document.getElementById("toggleUnit");
const toggleText = document.getElementById("toggleText");
const refreshBtn = document.getElementById("refreshBtn");
const form = document.getElementById("cityForm");
const cityInput = document.getElementById("cityInput");

export default function eventListeners() {

    toggleBtn.addEventListener("click",() => {
        if(toggleBtn.value === "metric") {
            toggleBtn.value = "us";
            toggleText.innerHTML = "&deg;F";
        }else {
            toggleBtn.value = "metric";
            toggleText.innerHTML = "&deg;C";
        }
        toggleBtn.classList.toggle("active");
    });

    refreshBtn.addEventListener("click",() => {
        window.location.reload();
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const city = cityInput.value.trim();
        const unit = toggleBtn.value;
        handleFormSubmission(city,unit);
    });

}