export const displayWeather = (weatherObj) => {
    const contentElement = document.getElementById("parkForecast");
    
    let weatherDisplay =     `
                            <div>
                            <h3>${weatherObj[0].dt_txt}</h3>
                            <h4>${weatherObj[0].weather[0].main}</h4>
                            <p>${weatherObj[0].main.temp}&#176 F</p>
                            <p>${weatherObj[0].weather[0].description}</p>
                            </div>
                            <div>
                            <h3>${weatherObj[6].dt_txt}</h3>
                            <h4>${weatherObj[6].weather[0].main}</h4>
                            <p>${weatherObj[6].main.temp}&#176 F</p>
                            <p>${weatherObj[6].weather[0].description}</p>
                            </div>
                            <div>
                            <h3>${weatherObj[14].dt_txt}</h3>
                            <h4>${weatherObj[14].weather[0].main}</h4>
                            <p>${weatherObj[14].main.temp}&#176 F</p>
                            <p>${weatherObj[14].weather[0].description}</p>
                            </div>
                            <div>
                            <h3>${weatherObj[22].dt_txt}</h3>
                            <h4>${weatherObj[22].weather[0].main}</h4>
                            <p>${weatherObj[22].main.temp}&#176 F</p>
                            <p>${weatherObj[22].weather[0].description}</p>
                            </div>
                            <div>
                            <h3>${weatherObj[30].dt_txt}</h3>
                            <h4>${weatherObj[30].weather[0].main}</h4>
                            <p>${weatherObj[30].main.temp}&#176 F</p>
                            <p>${weatherObj[30].weather[0].description}</p>
                            </div>
                            `;
    
    contentElement.innerHTML = weatherDisplay;
}


// String date = ;
// dt
// main.temp
// weather[0].main