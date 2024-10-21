

const selectIcon = (apiIcon,period) => {
   let icon;
   switch (apiIcon) {
        case "snow": icon = `${apiIcon}-${period}`; break;
        case "snow-showers-day": icon ='snow-day'; break;
        case "snow-showers-night": icon ='snow-night'; break;
        case "thunder-rain": icon = `storm-${period}`; break;
        case "thunder-showers-day": icon = 'storm-day'; break;
        case "thunder-showers-night": icon ='storm-night'; break;
        case "rain": icon = `${apiIcon}-${period}`; break;
        case "showers-day": icon = apiIcon; break;
        case "showers-night": icon = apiIcon; break;
        case "fog": icon = `${apiIcon}-${period}`; break;
        case "wind": icon = `${apiIcon}-${period}`; break;
        case "cloudy": icon = `${apiIcon}-${period}`; break;
        case "partly-cloudy-day": icon = apiIcon; break;
        case "partly-cloudy-night": icon = apiIcon; break;
        case "clear-day": icon = apiIcon; break;
        case "clear-night": icon = apiIcon; break;
   }

   return `icons/${icon}.svg`;
}

export default selectIcon;