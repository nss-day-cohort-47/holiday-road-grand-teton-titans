export const displayPark = (parkObj) => {
    const contentElement = document.querySelector(".parkCard")

    let parkDisplay =  `
                            <h2>${parkObj.fullName}</h2>
                            <p>${parkObj.addresses[0].city}, ${parkObj.states}</p><br>
                            <button id="parkDetails" value="${parkObj.parkCode}">Details</button>
                           
                        `;
    
    contentElement.innerHTML = parkDisplay;
}


// ! showDetails() will show alert box (for details) when created
export const showParkDetails = (parkObj) => {
   
        alert
        (`  ${parkObj.fullName} \r\n 
            ${parkObj.url} \r\n
            ${parkObj.description} \r\n
            Best Content Creation Activities:
            ${parkObj.activities[0].name}
            ${parkObj.activities[1].name}
            ${parkObj.activities[2].name}
        `)


}

