export const displayPark = (parkObj) => {
    const contentElement = document.querySelector(".parkCard")


    let parkDisplay =  `
<<<<<<< HEAD
                            <h2>${parkObj.fullName}</h2>
                            <p>${parkObj.addresses[0].city}, ${parkObj.states}</p><br>
                            <button class="button" id="parkDetails" value="${parkObj.parkCode}">Details</button>
                           
=======
                            <h2 id="parkName">${parkObj.fullName}</h2>
                            <p id ="parkLocation">${parkObj.addresses[0].city}, ${parkObj.states}</p><br>
                            <button id="parkDetails" value="${parkObj.parkCode}">Details</button>
>>>>>>> main
                        `;

    contentElement.innerHTML = parkDisplay;
}


// ! showDetails() will show alert box (for details) when created
export const showParkDetails = (parkObj) => {

        alert
        (`  ${parkObj.fullName} \r\n 
            ${parkObj.url} \r\n
            ${parkObj.description} \r\n

            Best Spots for Content Creation:

            ${parkObj.activities[0].name}
            ${parkObj.activities[1].name}
            ${parkObj.activities[2].name}
        `)
    }
