export const displayWeather = (weatherObj) => {
    const weatherElement = document.querySelector(".weatherCard")
    let weatherDisplay = `
                            <div id ="firstWeatherDay">
                                <h2>${weatherObj.list[0].dt}</h2>
                                <p>${weatherObj.list[0].weather.main}</p>
                                <p>${weatherObj.list[0].main.temp} degrees</p>
                            </div>
                            <div id ="secondWeatherDay">
                                <h2>${weatherObj.list[0].dt}</h2>
                                <p>${weatherObj.list[0].weather.main}</p>
                                <p>${weatherObj.list[0].main.temp} degrees</p>
                            </div>
                        `;
    weatherElement.innerHTML = weatherDisplay
}
