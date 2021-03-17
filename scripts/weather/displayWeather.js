import { useWeather } from "./WeatherProvider.js";

export const displayWeather = (weatherObj) => {
    const weatherElement = document.querySelector(".weatherCard")
    let weatherDisplay = `
                            <div id ="firstWeatherDay">
                                <h2>${weatherObj.dt}</h2>
                                <p>${weatherObj.weather.main}</p>
                                <p>${weatherObj.main.temp} degrees</p>
                            </div>
                        `;
    weatherElement.innerHTML = weatherDisplay
}

export const weatherLoop = () => {
    const allWeather = useWeather();
    const DOMLocation = document.querySelector(".weatherCard");
    let weatherHTML = "";
    for (const oneDay of allWeather){
        weatherHTML += displayWeather(oneDay)
    }
    DOMLocation.innerHTML = weatherHTML
}