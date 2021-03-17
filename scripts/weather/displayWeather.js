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

// "WED"
// ${parsedResponse.list[0].dt_txt}
// ${parsedResponse.list[0].main.temp}
// ${parsedResponse.list[0].weather[0].main}
// ${parsedResponse.list[0].weather[0].description}
// "THUR"
// ${parsedResponse.list[5].dt_txt}
// ${parsedResponse.list[5].main.temp}
// ${parsedResponse.list[5].weather[0].main}
// ${parsedResponse.list[5].weather[0].description}
// "FRI"
// ${parsedResponse.list[13].dt_txt}
// ${parsedResponse.list[13].main.temp}
// ${parsedResponse.list[13].weather[0].main}
// ${parsedResponse.list[13].weather[0].description}
// "SAT"
// ${parsedResponse.list[21].dt_txt}
// ${parsedResponse.list[21].main.temp}
// ${parsedResponse.list[21].weather[0].main}
// ${parsedResponse.list[21].weather[0].description}
// "SUN"
// ${parsedResponse.list[28].dt_txt}
// ${parsedResponse.list[28].main.temp}}
// ${parsedResponse.list[28].weather[0].main}
// ${parsedResponse.list[28].weather[0].description}