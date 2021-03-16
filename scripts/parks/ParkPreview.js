export const displayPark = (parkObj) => {
    const contentElement = document.querySelector(".parkCard")

    let parkDisplay =  `
                            <h2>${parkObj.parkName}</h2>
                            <p>${parkObj.city}, ${parkObj.state}</p><br>
                            <button id="parkDetails">Details</button>
                           
                        `;
    
    contentElement.innerHTML = parkDisplay;
}