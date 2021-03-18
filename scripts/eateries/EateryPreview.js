export const displayEatery = (eateryObj) => {
    const contentElement = document.querySelector(".eateryCard")

    let eateryDisplay =     `<section id="eaterySection">
                            <h2 id="eateryName">${eateryObj.businessName}</h2>
                            <p id="eateryLocation"> Location: ${eateryObj.city}, ${eateryObj.state}</p>
                            <button id="eateryDetails" value="${eateryObj.id}">Detail snapshot</button>
                            </section>`;
    
    contentElement.innerHTML = eateryDisplay;
}


// when function is invoked, passes Obj through to display specific details of each object in the array in an alert box
export const showEateryDetails = (eateryObj) => {

    alert (
        `${eateryObj.businessName} \r\n 
        ${eateryObj.description} \r\n
        Wifi provided: ${eateryObj.ameneties.wifi} \r\n
        Restroom available: ${eateryObj.ameneties.restrooms}
        `
    )
} 
// \r\n breaks the returned line (works same as <br>)