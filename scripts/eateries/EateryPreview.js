export const displayEatery = (eateryObj) => {
    const contentElement = document.querySelector(".eateryCard")

    let eateryDisplay =     `<section id="eaterySection">
                            <h2 id="eateryName">${eateryObj.businessName}</h2>
                            <p id="eateryLocation">${eateryObj.city}, ${eateryObj.state}</p>
                            <button id="eateryDetails">Details</button>
                            </section>`;
    
    contentElement.innerHTML = eateryDisplay;
}