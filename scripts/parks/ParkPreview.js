export const displayPark = (parkObj) => {
    const contentElement = document.querySelector(".parkCard")

    let parkDisplay =  `
                            <h2>${parkObj.fullName}</h2>
                            <p>${parkObj.addresses[0].city}, ${parkObj.states}</p><br>
                            <button id="parkDetails">Details</button>
                           
                        `;
    
    contentElement.innerHTML = parkDisplay;
}


// ! showDetails() will show alert box (for details) when created
// export const showDetails = (allDetails) => {

// }