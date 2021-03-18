export const displayPark = (parkObj) => {
    const contentElement = document.querySelector(".parkCard")

    let parkDisplay =  `
                            <h2>${parkObj.fullName}</h2>
                            <p>${parkObj.addresses[0].city}, ${parkObj.states}</p><br>
                            <latitude id="parkLat" value="${parkObj.latitude}"></latitude>
                            <longitude id="parkLng" value="${parkObj.longitude}"></longitude>
                            <button id="parkDetails">Details</button>
                            <div id="parkForecast"></div>
                        `;
    
    contentElement.innerHTML = parkDisplay;
}


// ! showDetails() will show alert box (for details) when created
// export const showDetails = (allDetails) => {

// }