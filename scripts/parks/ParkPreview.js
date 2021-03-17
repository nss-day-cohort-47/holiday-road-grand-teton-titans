export const displayPark = (parkObj) => {
    const contentElement = document.querySelector(".parkCard")

    let parkDisplay =       `<section>
                            <h2 id="parkName">${parkObj.fullName}</h2>
                            <p id="parkLocation">${parkObj.addresses[0].city}, ${parkObj.states}</p>
                            <button id="parkDetails">Details</button>
                            </section>`;

    contentElement.innerHTML = parkDisplay;
}


// ! showDetails() will show alert box (for details) when created
// export const showDetails = (allDetails) => {

// }