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
            // console.log(parsedResponse.list);
            console.log("WED")
            console.log(parsedResponse.list[0].dt_txt);
            console.log(parsedResponse.list[0].main.temp);
            console.log(parsedResponse.list[0].weather[0].main);
            console.log(parsedResponse.list[0].weather[0].description);
            console.log("THUR")
            console.log(parsedResponse.list[5].dt_txt);
            console.log(parsedResponse.list[5].main.temp);
            console.log(parsedResponse.list[5].weather[0].main);
            console.log(parsedResponse.list[5].weather[0].description);
            console.log("FRI")
            console.log(parsedResponse.list[13].dt_txt);
            console.log(parsedResponse.list[13].main.temp);
            console.log(parsedResponse.list[13].weather[0].main);
            console.log(parsedResponse.list[13].weather[0].description);
            console.log("SAT")
            console.log(parsedResponse.list[21].dt_txt);
            console.log(parsedResponse.list[21].main.temp);
            console.log(parsedResponse.list[21].weather[0].main);
            console.log(parsedResponse.list[21].weather[0].description);
            console.log("SUN")
            console.log(parsedResponse.list[28].dt_txt);
            console.log(parsedResponse.list[28].main.temp);
            console.log(parsedResponse.list[28].weather[0].main);
            console.log(parsedResponse.list[28].weather[0].description);
            return parsedResponse.list;
        })
}