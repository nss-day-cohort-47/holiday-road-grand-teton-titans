import { settings } from "../Settings.js";

let parsedWeather = [];

export const useWeather = () => {
    return parsedWeather;
}

export const getWeather = (lat, lng) => {
    // Dummy values right now.
    return fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${settings.weatherKey}`)
        .then(response => response.json())
        .then(parsedResponse => {
            parsedWeather = parsedResponse.list;
            return parsedResponse.list;
        })
}