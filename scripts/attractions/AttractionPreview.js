export const displayAttraction = (attractionObj) => {
    return `
        <section id="attractionSection">
        <h2 id="attractionName">${attractionObj.name}</h2>
        <p id="attractionLocation"> ${attractionObj.city}, ${attractionObj.state}</p>
        <button id=attractionDetails">Details</button>
	    </section>`
};