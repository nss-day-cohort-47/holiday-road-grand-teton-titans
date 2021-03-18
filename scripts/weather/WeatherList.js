import { getWeather } from "./WeatherProvider.js";

export const parkWeather = (parkObj) => {
    let parkCord = getLocation(parkObj);
    getWeather(parkCord[0], parkCord[1])
        .then(response => {
            console.log(response);
        })
}

const getLocation = (parkObj) => {
    let locationCord = [];
    locationCord.push(parkObj.latitude, parkObj.longitude)
    return locationCord;
}
