export const getEateries = () => {

    return fetch("http://holidayroad.nss.team/eateries")
    .then(response => response.json())
    .then(parsedResponse => {
        // do something with response here
        return parsedResponse;
    })
}

const eateriesCard = (eateryObj) => {
    return `
        <h2>${eateryObj.businessName}</h2>
        <p><em>${eateryObj.city}, ${eateryObj.state}</em></p>
        <button>Details</button>
            <p></p>
    `
}