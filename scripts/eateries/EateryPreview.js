export const displayEatery = (eateryObj) => {
    const contentElement = document.querySelector(".eateryCard")

    let eateryDisplay =     `<section id="eaterySection">
                            <h2 id="eateryName">${eateryObj.businessName}</h2>
                            <p id="eateryLocation">${eateryObj.city}, ${eateryObj.state}</p>
                            <button class="button" id="eateryDetails" value="${eateryObj.id}">Details</button>
                            </section>`;
    
    contentElement.innerHTML = eateryDisplay;
}


// showEateryDetails() should be written here 
export const showEateryDetails = (eateryObj) => {

    alert (
        `${eateryObj.businessName} \r\n
        ${eateryObj.description} \r\n
        Wifi: ${eateryObj.ameneties.wifi} \r\n
        Restrooms: ${eateryObj.ameneties.restrooms}
        `
    )
} 