export const displayEatery = (weatherObj) => {
    const contentElement = document.getElementById("parkForcast");

    let weatherDisplay =     `<h2>${weatherDisplay.list[0].dt}</h2>
                            <button id="eateryDetails">Details</button>
                            <br>
                            <p>${weatherDisplay.list[0].main.temp}</p>`;
    
    contentElement.innerHTML = weatherDisplay;
}



// dt
// main.temp
// weather[0].main