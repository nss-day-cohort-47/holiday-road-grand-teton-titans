export const displayWeather = (weatherObj) => {
    const contentElement = document.getElementById("parkForecast");
    const firstday = weatherObj[0].dt;//! 
    //? converting epoch date to better work with milliseconds (TIME ACCURACY)
    const firstADate = firstday * 1000;
    //? conforms date to readable format
    const firstFixedDate = new Date(firstADate);
    //? returns the day of the week
    const firstDayDate = firstFixedDate.toLocaleString("en-US", {weekday: "long"})
    //? returns the hour of the day
    

    const secondDay = weatherObj[1].dt;//! 
    //? converting epoch date to better work with milliseconds (TIME ACCURACY)
    const secondADate = secondDay * 1000;
    //? conforms date to readable format
    const secondFixedDate = new Date(secondADate);
    //? returns the day of the week
    const secondDayDate = secondFixedDate.toLocaleString("en-US", {weekday: "long"})
    //? returns the hour of the day
    

    const thirdDay = weatherObj[2].dt;//! 
    //? converting epoch date to better work with milliseconds (TIME ACCURACY)
    const thirdADate = thirdDay * 1000;
    //? conforms date to readable format
    const thirdFixedDate = new Date(thirdADate);
    //? returns the day of the week
    const thirdDayDate = thirdFixedDate.toLocaleString("en-US", {weekday: "long"})
    //? returns the hour of the day
    

    const fourthDay = weatherObj[3].dt;//! 
    //? converting epoch date to better work with milliseconds (TIME ACCURACY)
    const fourthADate = fourthDay * 1000;
    //? conforms date to readable format
    const fourthFixedDate = new Date(fourthADate);
    //? returns the day of the week
    const fourthDayDate = fourthFixedDate.toLocaleString("en-US", {weekday: "long"})
    //? returns the hour of the day
    

    const fifthDay = weatherObj[4].dt;//! 
    //? converting epoch date to better work with milliseconds (TIME ACCURACY)
    const fifthADate = fifthDay * 1000;
    //? conforms date to readable format
    const fifthFixedDate = new Date(fifthADate);
    //? returns the day of the week
    const fifthDayDate = fifthFixedDate.toLocaleString("en-US", {weekday: "long"})
    //? returns the hour of the day
    

    let weatherDisplay =     `
                            <div class="weatherCard">
                            <h3>${firstDayDate} at 12PM</h3>
                            <h4>${weatherObj[0].weather[0].main}</h4>
                            <p>${weatherObj[0].main.temp}&#176 F</p>
                            <p>${weatherObj[0].weather[0].description}</p>
                            </div>
                            <div class="weatherCard">
                            <h3>${secondDayDate} at 12PM</h3>
                            <h4>${weatherObj[1].weather[0].main}</h4>
                            <p>${weatherObj[1].main.temp}&#176 F</p>
                            <p>${weatherObj[1].weather[0].description}</p>
                            </div>
                            <div class="weatherCard">
                            <h3>${thirdDayDate} at 12PM</h3>
                            <h4>${weatherObj[2].weather[0].main}</h4>
                            <p>${weatherObj[2].main.temp}&#176 F</p>
                            <p>${weatherObj[2].weather[0].description}</p>
                            </div>
                            <div class="weatherCard">
                            <h3>${fourthDayDate} at 12PM</h3>
                            <h4>${weatherObj[3].weather[0].main}</h4>
                            <p>${weatherObj[3].main.temp}&#176 F</p>
                            <p>${weatherObj[3].weather[0].description}</p>
                            </div>
                            <div class="weatherCard">
                            <h3>${fifthDayDate} at 12PM</h3>
                            <h4>${weatherObj[4].weather[0].main}</h4>
                            <p>${weatherObj[4].main.temp}&#176 F</p>
                            <p>${weatherObj[4].weather[0].description}</p>
                            </div>
                            `;
    
    contentElement.innerHTML = weatherDisplay;
}
// String date = ;
// dt
// main.temp
// weather[0].main