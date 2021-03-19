export const displayPark = (parkObj) => {
    const contentElement = document.querySelector(".parkCard")

    let parkDisplay =  `
                            <h2 id="parkName">${parkObj.fullName}</h2>
                            <p id="parkLocation">${parkObj.addresses[0].city}, ${parkObj.states}</p><br>
                            <p> <a href="${parkObj.url}">Visit the ${parkObj.fullName} official website!</a> </p><br>
                            <latitude id="parkLat" value="${parkObj.latitude}"></latitude>
                            <longitude id="parkLng" value="${parkObj.longitude}"></longitude>
                            <button id="parkDetails" value="${parkObj.parkCode}">Details Snapshot</button>
                            <div id="parkForecast"></div>
                        `;
    
    contentElement.innerHTML = parkDisplay;
}

// ! showDetails() will show alert box (for details) when created
export const showParkDetails = (parkObj) => {

        alert
        (`  ${parkObj.fullName} \r\n 
            ${parkObj.description} \r\n
            Best Spots for Content Creation:
            ${parkObj.activities[0].name}
            ${parkObj.activities[1].name}
            ${parkObj.activities[2].name}
        `)
    }

