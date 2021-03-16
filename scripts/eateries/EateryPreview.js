export const displayEatery = (eateryObj) => {
    const contentElement = document.querySelector(".eateryCard")

    let eateryDisplay =     `<h2>${eateryObj.businessName}</h2>
                            <button id="eateryDetails">Details</button>
                            <br>
                            <p>${eateryObj.city}, ${eateryObj.state}</p>`;
    
    contentElement.innerHTML = eateryDisplay;
}
