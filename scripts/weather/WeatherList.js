import { getWeather } from "./WeatherProvider.js";
import { displayWeather } from "./WeatherPreview.js"

export const parkWeather = (parkObj) => {
    let parkCord = getLocation(parkObj);
    getWeather(parkCord[0], parkCord[1])
        .then(response => {
            const filteredWeather = weatherFilter(response);
            console.log(filteredWeather)
            displayWeather(filteredWeather)
        })
}

const getLocation = (parkObj) => {
    let locationCord = [];
    locationCord.push(parkObj.latitude, parkObj.longitude)
    return locationCord;
}

const weatherFilter = (weatherArray) => {
    let filteredWeatherArray = [];
    weatherArray.forEach(weatherObj => {
        if (weatherObj.dt_txt.includes('12:00:00')){
            filteredWeatherArray.push(weatherObj);
        }
    });
    return filteredWeatherArray;
}