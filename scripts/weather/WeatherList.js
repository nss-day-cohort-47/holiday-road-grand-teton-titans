import { getWeather } from "./WeatherProvider.js";
import { displayWeather } from "./WeatherPreview.js"

export const parkWeather = (parkObj) => {
    let parkCord = getLocation(parkObj);
    getWeather(parkCord[0], parkCord[1])
        .then(response => {
            // console.log(response);
            displayWeather(response)
        })
}

const getLocation = (parkObj) => {
    let locationCord = [];
    locationCord.push(parkObj.latitude, parkObj.longitude)
    return locationCord;
}
