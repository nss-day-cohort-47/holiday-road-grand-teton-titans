export const displayWeather = (weatherObj) => {
    const contentElement = document.getElementById("parkForecast");
    const firstday = weatherObj[0].dt;//! FIRST DAY EPOCH CONVERSION
    //? converting epoch date to better work with milliseconds (TIME ACCURACY)
    const firstADate = firstday * 1000;
    //? conforms date to readable format
    const firstFixedDate = new Date(firstADate);
    //? returns the day of the week
    const firstDayDate = firstFixedDate.toLocaleString("en-US", {weekday: "long"})
    //? returns the hour of the day
    

    const secondDay = weatherObj[1].dt;//! SECOND DAY EPOCH CONVERSION
    //? converting epoch date to better work with milliseconds (TIME ACCURACY)
    const secondADate = secondDay * 1000;
    //? conforms date to readable format
    const secondFixedDate = new Date(secondADate);
    //? returns the day of the week
    const secondDayDate = secondFixedDate.toLocaleString("en-US", {weekday: "long"})
    //? returns the hour of the day
    

    const thirdDay = weatherObj[2].dt;//! THIRD DAY EPOCH CONVERSION
    //? converting epoch date to better work with milliseconds (TIME ACCURACY)
    const thirdADate = thirdDay * 1000;
    //? conforms date to readable format
    const thirdFixedDate = new Date(thirdADate);
    //? returns the day of the week
    const thirdDayDate = thirdFixedDate.toLocaleString("en-US", {weekday: "long"})
    //? returns the hour of the day
    

    const fourthDay = weatherObj[3].dt;//! FOURTH DAY EPOCH CONVERSION
    //? converting epoch date to better work with milliseconds (TIME ACCURACY)
    const fourthADate = fourthDay * 1000;
    //? conforms date to readable format
    const fourthFixedDate = new Date(fourthADate);
    //? returns the day of the week
    const fourthDayDate = fourthFixedDate.toLocaleString("en-US", {weekday: "long"})
    //? returns the hour of the day
    

    const fifthDay = weatherObj[4].dt;//! FIFTH DAY EPOCH CONVERSION
    //? converting epoch date to better work with milliseconds (TIME ACCURACY)
    const fifthADate = fifthDay * 1000;
    //? conforms date to readable format
    const fifthFixedDate = new Date(fifthADate);
    //? returns the day of the week
    const fifthDayDate = fifthFixedDate.toLocaleString("en-US", {weekday: "long"})
    //? returns the hour of the day
    

    let weatherDisplay =     `
                            <div class="weatherCard">
                            <h3 class="forecastTitle">${firstDayDate}'s<br/>"Golden Hour"</h3>
                            <img class="forecastIcon" src="http://openweathermap.org/img/w/${weatherObj[0].weather[0].icon}.png"/>
                            <h4 class="forecastWeather">${weatherObj[0].weather[0].main}</h4>
                            <p class="forecastCardTemp">${weatherObj[0].main.temp}&#176 F</p>
                            <p class ="weatherCardBottom">${weatherObj[0].weather[0].description}</p>
                            </div>
                            <div class="weatherCard">
                            <h3 class="forecastTitle">${secondDayDate}'s<br/>"Golden Hour"</h3>
                            <img class="forecastIcon" src="http://openweathermap.org/img/w/${weatherObj[1].weather[0].icon}.png"/>
                            <h4 class="forecastWeather">${weatherObj[1].weather[0].main}</h4>
                            <p class="forecastCardTemp">${weatherObj[1].main.temp}&#176 F</p>
                            <p class ="weatherCardBottom">${weatherObj[1].weather[0].description}</p>
                            </div>
                            <div class="weatherCard">
                            <h3 class="forecastTitle">${thirdDayDate}'s<br/>"Golden Hour"</h3>
                            <img class="forecastIcon" src="http://openweathermap.org/img/w/${weatherObj[2].weather[0].icon}.png"/>
                            <h4 class="forecastWeather">${weatherObj[2].weather[0].main}</h4>
                            <p class="forecastCardTemp">${weatherObj[2].main.temp}&#176 F</p>
                            <p class ="weatherCardBottom">${weatherObj[2].weather[0].description}</p>
                            </div >
                            <div class="weatherCard">
                            <h3 class="forecastTitle">${fourthDayDate}'s<br/>"Golden Hour"</h3>
                            <img class="forecastIcon" src="http://openweathermap.org/img/w/${weatherObj[3].weather[0].icon}.png"/>
                            <h4 class="forecastWeather">${weatherObj[3].weather[0].main}</h4>
                            <p class="forecastCardTemp">${weatherObj[3].main.temp}&#176 F</p>
                            <p class ="weatherCardBottom">${weatherObj[3].weather[0].description}</p>
                            </div>
                            <div class="weatherCard">
                            <h3 class="forecastTitle">${fifthDayDate}'s<br/>"Golden Hour"</h3>
                            <img class="forecastIcon" src="http://openweathermap.org/img/w/${weatherObj[4].weather[0].icon}.png"/>
                            <h4 class="forecastWeather">${weatherObj[4].weather[0].main}</h4>
                            <p class="forecastCardTemp">${weatherObj[4].main.temp}&#176 F</p>
                            <p class ="weatherCardBottom">${weatherObj[4].weather[0].description}</p>
                            </div>
                            `;
    
    contentElement.innerHTML = weatherDisplay;
}
// String date = ;
// dt
// main.temp
// weather[0].main