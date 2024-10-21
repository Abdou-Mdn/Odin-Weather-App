/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/CurrentWeather.js":
/*!*******************************!*\
  !*** ./src/CurrentWeather.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getCurrentWeather)\n/* harmony export */ });\n/* harmony import */ var _FetchData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FetchData */ \"./src/FetchData.js\");\n\n\nlet currentWeather = {};\n\n\nconst extractCurrentWeather = () => {\n    const data = (0,_FetchData__WEBPACK_IMPORTED_MODULE_0__.getRequestResult)();\n    currentWeather = {\n        cityName: data.resolvedAddress,\n        date: data.days[0].datetime,\n        dateTime: data.currentConditions.datetime,\n        temp: data.currentConditions.temp,\n        condition: data.currentConditions.conditions,\n        icon: data.currentConditions.icon,\n        humidity: data.currentConditions.humidity,\n        windSpeed: data.currentConditions.windspeed,\n        highTemp: data.days[0].tempmax,\n        sunrise: data.currentConditions.sunrise,\n        sunset: data.currentConditions.sunset,\n    }\n}\n\nfunction getCurrentWeather () {\n    extractCurrentWeather();\n    return currentWeather;\n}\n\n\n//# sourceURL=webpack://7.weather-app/./src/CurrentWeather.js?");

/***/ }),

/***/ "./src/DateAndClock.js":
/*!*****************************!*\
  !*** ./src/DateAndClock.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handleDateAndClockDisplay),\n/* harmony export */   getDateTime: () => (/* binding */ getDateTime)\n/* harmony export */ });\n\nlet clockInterval;\n\nfunction getDateTime(time){\n    const [hours,minutes] = time.split(':').map(Number);\n    const startDate = new Date();\n    const newHour = parseInt(minutes)< 30 ? hours : hours+1;\n    startDate.setHours(newHour);\n    return startDate;\n}\n\nconst updateClock = (clockDate) => {\n    const clock = document.getElementById(\"clock\");\n\n    clockDate.setSeconds(clockDate.getSeconds()+1);\n\n    const hours = String(clockDate.getHours()).padStart(2,'0');\n    const minutes = String(clockDate.getMinutes()).padStart(2,'0');\n    const seconds = String(clockDate.getSeconds()).padStart(2,'0');\n\n    clock.innerText = `${hours}:${minutes}:${seconds}`;\n}\n\nconst updateDate = (currentDate) => {\n    const date = document.getElementById(\"date\");\n    date.innerText = currentDate;\n}\n\nfunction handleDateAndClockDisplay(dateTime,currentDate) {\n    updateDate(currentDate);\n    if(clockInterval) {\n        clearInterval(clockInterval);\n    }\n    const clockDate = new Date(dateTime);\n    clockInterval = setInterval(() => {updateClock(clockDate)},1000); \n}\n\n\n\n//# sourceURL=webpack://7.weather-app/./src/DateAndClock.js?");

/***/ }),

/***/ "./src/DayNightTheme.js":
/*!******************************!*\
  !*** ./src/DayNightTheme.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   changeColors: () => (/* binding */ changeColors),\n/* harmony export */   isDayOrNight: () => (/* binding */ isDayOrNight)\n/* harmony export */ });\n/* harmony import */ var _CurrentWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CurrentWeather */ \"./src/CurrentWeather.js\");\n/* harmony import */ var _DateAndClock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DateAndClock */ \"./src/DateAndClock.js\");\n\n\n\nfunction isDayOrNight(time,isObject) {\n    const {sunrise, sunset} = (0,_CurrentWeather__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n    let currentTime;\n    if(isObject) {\n        currentTime = time.getTime();\n    }else {\n        currentTime = (0,_DateAndClock__WEBPACK_IMPORTED_MODULE_1__.getDateTime)(time).getTime(); \n    }\n    \n\n    const [sunriseH,sunriseM,sunriseS] = sunrise.split(':');\n    const sunriseT = new Date();\n    sunriseT.setHours(sunriseH);\n    sunriseT.setMinutes(sunriseM);\n    const sunriseTime = sunriseT.setSeconds(sunriseS);\n    \n    const [sunsetH,sunsetM,sunsetS] = sunset.split(':');\n    const sunsetT = new Date();\n    sunsetT.setHours(sunsetH);\n    sunsetT.setMinutes(sunsetM);\n    const sunsetTime = sunsetT.setSeconds(sunsetS);\n\n\n    return (currentTime >= sunriseTime && currentTime < sunsetTime) ? \"day\" : \"night\";\n}\n\nfunction changeColors (period) {\n    \n    const root = document.documentElement;\n    if (period === \"night\"){\n        root.style.setProperty(\"--BG-COLOR-1\",\"linear-gradient(to bottom right,#003366,#001f3f)\");\n        root.style.setProperty(\"--BG-COLOR-2\",\"#0F2836\")\n        root.style.setProperty(\"--BG-COLOR-3\",\"linear-gradient(to top left,#272746,#37374d)\");\n        root.style.setProperty(\"--ACTION-COLOR\",\"linear-gradient(to top right,#280044,#3f016c)\");\n        root.style.setProperty(\"--TEXT-COLOR\",\"#fff\");\n    }else {\n        root.style.setProperty(\"--BG-COLOR-1\",\"linear-gradient(to bottom right,#00c6ff,#0072ff)\");\n        root.style.setProperty(\"--BG-COLOR-2\",\"#d8f4fc\");\n        root.style.setProperty(\"--BG-COLOR-3\",\"linear-gradient(to top left,#e9e9e9,#ffffff)\");\n        root.style.setProperty(\"--ACTION-COLOR\",\"linear-gradient(to top right,#ffaa00,#ffd700)\");\n        root.style.setProperty(\"--TEXT-COLOR\",\"#000\");\n    }\n\n}\n\n\n//# sourceURL=webpack://7.weather-app/./src/DayNightTheme.js?");

/***/ }),

/***/ "./src/Display.js":
/*!************************!*\
  !*** ./src/Display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayContent: () => (/* binding */ displayContent),\n/* harmony export */   displayError: () => (/* binding */ displayError),\n/* harmony export */   hideContent: () => (/* binding */ hideContent),\n/* harmony export */   hideError: () => (/* binding */ hideError)\n/* harmony export */ });\n/* harmony import */ var _CurrentWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CurrentWeather */ \"./src/CurrentWeather.js\");\n/* harmony import */ var _HourlyForcast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HourlyForcast */ \"./src/HourlyForcast.js\");\n/* harmony import */ var _WeeklyForecast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WeeklyForecast */ \"./src/WeeklyForecast.js\");\n/* harmony import */ var _DateAndClock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DateAndClock */ \"./src/DateAndClock.js\");\n/* harmony import */ var _DayNightTheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DayNightTheme */ \"./src/DayNightTheme.js\");\n/* harmony import */ var _IconSelection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./IconSelection */ \"./src/IconSelection.js\");\n/* harmony import */ var _FetchData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FetchData */ \"./src/FetchData.js\");\n/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Loading */ \"./src/Loading.js\");\n\n\n\n\n\n\n\n\n\nconst contentDiv = document.getElementById(\"content\");\nconst errorDiv = document.getElementById(\"error\");\n\nconst displayData = () => {\n    const unit = (0,_FetchData__WEBPACK_IMPORTED_MODULE_6__.getResultUnit)();\n    displayCurrentWeather(unit);\n    displayHourlyForecast();\n    displayWeeklyForecast();\n}\n\nconst displayCurrentWeather = (unit) => {\n    const currentWeather = (0,_CurrentWeather__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    const period = (0,_DayNightTheme__WEBPACK_IMPORTED_MODULE_4__.isDayOrNight)(currentWeather.dateTime,true);\n    (0,_DayNightTheme__WEBPACK_IMPORTED_MODULE_4__.changeColors)(period);\n    (0,_DateAndClock__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(currentWeather.dateTime,currentWeather.date);\n\n    const cityName = document.getElementById(\"cityName\")\n    cityName.innerText = currentWeather.cityName;\n    \n    const weatherIcon = document.getElementById(\"currentWeatherIcon\");\n    weatherIcon.src = (0,_IconSelection__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(currentWeather.icon,period);\n\n    const temperature = document.getElementById(\"temperature\");\n    temperature.innerHTML = `<h2>${currentWeather.temp}&deg;</h2><span>${currentWeather.condition}</span>`;\n\n    const humidity = document.getElementById(\"humidityInfo\");\n    humidity.innerText = `${currentWeather.humidity}%`\n\n    const windspeed = document.getElementById(\"windSpeed\");\n    windspeed.innerText = `${currentWeather.windSpeed} ${unit === \"metric\" ? \"Kph\" : \"Mph\"}`;\n\n    const highTemp = document.getElementById(\"highTemp\");\n    highTemp.innerHTML = `${currentWeather.highTemp}&deg;`;\n\n    const sunrise = document.getElementById(\"sunriseTime\");\n    const sunriseTime = currentWeather.sunrise.slice(0,5);\n    sunrise.innerText = sunriseTime;\n\n    const sunset = document.getElementById(\"sunsetTime\");\n    const sunsetTime = currentWeather.sunset.slice(0,5);\n    sunset.innerText = sunsetTime;\n\n}\n\nconst displayHourlyForecast = () => {\n    const hourlyForecast = (0,_HourlyForcast__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const hourlyForecastUL = document.getElementById(\"hourlyForecast\");\n\n    hourlyForecast.map((hour,index) => {\n        const li = document.createElement(\"li\");\n\n        const time = document.createElement(\"span\");\n        time.className = \"time\";\n        time.innerText = index === 0 ? \"Now\" : hour.time;\n        li.appendChild(time);\n\n        const period = (0,_DayNightTheme__WEBPACK_IMPORTED_MODULE_4__.isDayOrNight)(hour.time,false);\n        const icon = document.createElement(\"img\");\n        icon.className = \"icon\";\n        icon.src = (0,_IconSelection__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(hour.icon,period);\n        li.appendChild(icon);\n\n        const temperature = document.createElement(\"span\");\n        temperature.className = \"degree\";\n        temperature.innerHTML = `${hour.temperature}&deg;`;\n        li.appendChild(temperature);\n\n        hourlyForecastUL.appendChild(li);\n    });\n}\n\n\nconst displayWeeklyForecast = () => {\n    const weeklyForecast = (0,_WeeklyForecast__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    const weeklyForecastUL = document.getElementById(\"weeklyForecast\");\n\n    weeklyForecast.map((day) => {\n        const li = document.createElement(\"li\");\n\n        const dayName = document.createElement(\"span\");\n        dayName.className = \"day\";\n        dayName.innerText =  day.day;\n        li.appendChild(dayName);\n\n        const icon = document.createElement(\"img\");\n        icon.className = \"icon\";\n        icon.src = (0,_IconSelection__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(day.icon,\"day\");\n        li.appendChild(icon);\n\n        const temperature = document.createElement(\"span\");\n        temperature.className = \"degree\";\n        temperature.innerHTML = `${day.temperature}&deg;`;\n        li.appendChild(temperature);\n\n        weeklyForecastUL.appendChild(li);\n    });\n}\n\nconst displayErrorMessage = () => {\n    const message = (0,_FetchData__WEBPACK_IMPORTED_MODULE_6__.getRequestResult)();\n    const error = document.getElementById(\"errorMessage\");\n    error.innerText = message; \n}\n\nfunction hideContent() {\n    contentDiv.classList.remove(\"active\");\n}\n\nfunction hideError() {\n    errorDiv.classList.remove(\"active\");\n}\n\nfunction displayContent() {\n    hideError();\n    (0,_Loading__WEBPACK_IMPORTED_MODULE_7__.hideLoading)();\n    contentDiv.classList.add(\"active\");\n    displayData();\n}\n\nfunction displayError() {\n    hideContent();\n    (0,_Loading__WEBPACK_IMPORTED_MODULE_7__.hideLoading)();\n    errorDiv.classList.add(\"active\");\n    displayErrorMessage();\n}\n\n//# sourceURL=webpack://7.weather-app/./src/Display.js?");

/***/ }),

/***/ "./src/EventListeners.js":
/*!*******************************!*\
  !*** ./src/EventListeners.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ eventListeners)\n/* harmony export */ });\n/* harmony import */ var _FormSubmission__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormSubmission */ \"./src/FormSubmission.js\");\n\n\nconst toggleBtn = document.getElementById(\"toggleUnit\");\nconst toggleText = document.getElementById(\"toggleText\");\nconst refreshBtn = document.getElementById(\"refreshBtn\");\nconst form = document.getElementById(\"cityForm\");\nconst cityInput = document.getElementById(\"cityInput\");\n\nfunction eventListeners() {\n\n    toggleBtn.addEventListener(\"click\",() => {\n        if(toggleBtn.value === \"metric\") {\n            toggleBtn.value = \"us\";\n            toggleText.innerHTML = \"&deg;F\";\n        }else {\n            toggleBtn.value = \"metric\";\n            toggleText.innerHTML = \"&deg;C\";\n        }\n        toggleBtn.classList.toggle(\"active\");\n    });\n\n    refreshBtn.addEventListener(\"click\",() => {\n        window.location.reload();\n    });\n\n    form.addEventListener(\"submit\", (event) => {\n        event.preventDefault();\n        const city = cityInput.value.trim();\n        const unit = toggleBtn.value;\n        (0,_FormSubmission__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(city,unit);\n    });\n\n}\n\n//# sourceURL=webpack://7.weather-app/./src/EventListeners.js?");

/***/ }),

/***/ "./src/FetchData.js":
/*!**************************!*\
  !*** ./src/FetchData.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchData),\n/* harmony export */   getRequestResult: () => (/* binding */ getRequestResult),\n/* harmony export */   getRequestSucces: () => (/* binding */ getRequestSucces),\n/* harmony export */   getResultUnit: () => (/* binding */ getResultUnit),\n/* harmony export */   setResultUnit: () => (/* binding */ setResultUnit)\n/* harmony export */ });\n\n\nconst API_KEY = \"GQ9CS732CEKG55K85Y6JJ248D\";\n\nlet result = {\n    success: false,\n    unit: \"metric\",\n    data: null,\n};\n\n\nconst getCurrentTime = async(timezone) => {\n    /* const url = `https://worldtimeapi.org/api/timezone/${timezone}`; */\n    const url = `https://timeapi.io/api/Time/current/zone?timeZone=${timezone}`;\n    const response = await fetch(url);\n    const data = await response.json();\n    return new Date(data.dateTime);\n}\n\nasync function fetchData(city,unit){\n    const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(city)}?unitGroup=${unit}&include=current,hours,day&iconSet=icons2&key=${API_KEY}&contentType=json`;\n\n    try {\n        const response = await fetch(URL);\n\n        if (!response.ok) {\n            const errorData = await response.text();\n            result.success = false;\n            result.data = errorData.split(\":\").pop();\n            return;\n        }\n        const data = await response.json();\n        result.success = true;\n        result.data = data;\n        result.data.currentConditions.datetime = await getCurrentTime(data.timezone);\n    } catch (error) {\n        result.success = false;\n        result.data = error.message;\n    }\n}\n\nfunction getRequestSucces() {\n    return result.success;\n}\n\nfunction getRequestResult() {\n    return result.data;\n}\n\nfunction setResultUnit(unit){\n    result.unit = unit;\n}\n\nfunction getResultUnit() {\n    return result.unit;\n}\n\n//# sourceURL=webpack://7.weather-app/./src/FetchData.js?");

/***/ }),

/***/ "./src/FormSubmission.js":
/*!*******************************!*\
  !*** ./src/FormSubmission.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Display */ \"./src/Display.js\");\n/* harmony import */ var _FetchData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FetchData */ \"./src/FetchData.js\");\n/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Loading */ \"./src/Loading.js\");\n\n\n\n\n\nconst handleFormSubmission = async (cityName,unit) => {\n    (0,_FetchData__WEBPACK_IMPORTED_MODULE_1__.setResultUnit)(unit);\n    (0,_Loading__WEBPACK_IMPORTED_MODULE_2__.displayLoading)();\n    await (0,_FetchData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(cityName,unit);\n    const status = (0,_FetchData__WEBPACK_IMPORTED_MODULE_1__.getRequestSucces)();\n    if (status) {\n        (0,_Display__WEBPACK_IMPORTED_MODULE_0__.displayContent)();\n    }else {\n        (0,_Display__WEBPACK_IMPORTED_MODULE_0__.displayError)();\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleFormSubmission);\n\n//# sourceURL=webpack://7.weather-app/./src/FormSubmission.js?");

/***/ }),

/***/ "./src/HourlyForcast.js":
/*!******************************!*\
  !*** ./src/HourlyForcast.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getHourlyForecast)\n/* harmony export */ });\n/* harmony import */ var _FetchData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FetchData */ \"./src/FetchData.js\");\n\n\nlet hourlyForecast = [];\n\nconst extractHourlyForecast = () => {\n    const data = (0,_FetchData__WEBPACK_IMPORTED_MODULE_0__.getRequestResult)();\n    const hourlyData = data.days[0].hours.concat(data.days[1].hours);\n    const currentHour = new Date().getHours();\n    const next24hours = hourlyData.slice(currentHour,currentHour+24);\n\n    hourlyForecast = next24hours.map((hour) => ({\n            time: hour.datetime.slice(0,5),\n            icon: hour.icon,\n            temperature: hour.temp   \n    }));\n}\n\nfunction getHourlyForecast() {\n    extractHourlyForecast();\n    return hourlyForecast;\n}\n\n//# sourceURL=webpack://7.weather-app/./src/HourlyForcast.js?");

/***/ }),

/***/ "./src/IconSelection.js":
/*!******************************!*\
  !*** ./src/IconSelection.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nconst selectIcon = (apiIcon,period) => {\n   let icon;\n   switch (apiIcon) {\n        case \"snow\": icon = `${apiIcon}-${period}`; break;\n        case \"snow-showers-day\": icon ='snow-day'; break;\n        case \"snow-showers-night\": icon ='snow-night'; break;\n        case \"thunder-rain\": icon = `storm-${period}`; break;\n        case \"thunder-showers-day\": icon = 'storm-day'; break;\n        case \"thunder-showers-night\": icon ='storm-night'; break;\n        case \"rain\": icon = `${apiIcon}-${period}`; break;\n        case \"showers-day\": icon = apiIcon; break;\n        case \"showers-night\": icon = apiIcon; break;\n        case \"fog\": icon = `${apiIcon}-${period}`; break;\n        case \"wind\": icon = `${apiIcon}-${period}`; break;\n        case \"cloudy\": icon = `${apiIcon}-${period}`; break;\n        case \"partly-cloudy-day\": icon = apiIcon; break;\n        case \"partly-cloudy-night\": icon = apiIcon; break;\n        case \"clear-day\": icon = apiIcon; break;\n        case \"clear-night\": icon = apiIcon; break;\n   }\n\n   return `icons/${icon}.svg`;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (selectIcon);\n\n//# sourceURL=webpack://7.weather-app/./src/IconSelection.js?");

/***/ }),

/***/ "./src/Loading.js":
/*!************************!*\
  !*** ./src/Loading.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayLoading: () => (/* binding */ displayLoading),\n/* harmony export */   hideLoading: () => (/* binding */ hideLoading)\n/* harmony export */ });\n/* harmony import */ var _Display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Display */ \"./src/Display.js\");\n\n\nconst loadingIcon = document.getElementById(\"loadingIcon\");\nconst loadingScreen = document.getElementById(\"loading\");\n\nconst icons = [\n    \"clear-day\", \"clear-night\", \"partly-cloudy-day\",\"partly-cloudy-night\",\n    \"cloudy-day\",\"cloudy-night\",\"rain-day\",\"rain-night\"];\n\nlet currentIndex = 0;\n\nconst changeIcon = () => {\n    currentIndex = (currentIndex + 1) % icons.length;\n    loadingIcon.src = `icons/${icons[currentIndex]}.svg`;\n}\n\n\nfunction displayLoading() {\n    ;(0,_Display__WEBPACK_IMPORTED_MODULE_0__.hideContent)();\n    (0,_Display__WEBPACK_IMPORTED_MODULE_0__.hideError)();\n    loadingScreen.classList.add(\"active\");\n    setInterval(changeIcon,2000);  \n}\n\nfunction hideLoading() {\n    loadingScreen.classList.remove(\"active\");\n}\n\n//# sourceURL=webpack://7.weather-app/./src/Loading.js?");

/***/ }),

/***/ "./src/WeeklyForecast.js":
/*!*******************************!*\
  !*** ./src/WeeklyForecast.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getWeeklyForecast)\n/* harmony export */ });\n/* harmony import */ var _FetchData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FetchData */ \"./src/FetchData.js\");\n\n\nlet weeklyForecast = [];\n\nconst extractWeeklyForecast = () => {\n    const data = (0,_FetchData__WEBPACK_IMPORTED_MODULE_0__.getRequestResult)();\n    const next7days = data.days.slice(0,7);\n    \n    weeklyForecast = next7days.map((day,index) => {\n        const date = new Date(day.datetime);\n        const dayName = index === 0 ? \"Today\" : date.toLocaleDateString('en-Us',{weekday: 'long'});\n        \n        return {\n            day: dayName,\n            icon: day.icon,\n            temperature: day.temp\n        }\n    });\n}\n\nfunction getWeeklyForecast() {\n    extractWeeklyForecast();\n    return weeklyForecast;\n}\n\n//# sourceURL=webpack://7.weather-app/./src/WeeklyForecast.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _EventListeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventListeners */ \"./src/EventListeners.js\");\n\n\n\n(0,_EventListeners__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n\n//# sourceURL=webpack://7.weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;