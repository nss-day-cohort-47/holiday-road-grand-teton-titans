export const displayPark = (parkObj) => {
    const contentElement = document.querySelector(".parkCard")

    let parkDisplay =  `
                            <h2>${parkObj.fullName}</h2>
                            <p>${parkObj.city}, ${parkObj.states}</p><br>
                            <button id="parkDetails">Details</button>
                           
                        `;
    
    contentElement.innerHTML = parkDisplay;
}


// ! showDetails() will show alert box (for details)
// export const showDetails = (allDetails) => {

// }