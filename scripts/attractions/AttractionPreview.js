export const displayAttraction = (attractionObj) => {
    return `
        <section id="attractionSection">
        <h2 id="attractionName">${attractionObj.name}</h2>
        <p id="attractionLocation"> Location: ${attractionObj.city}, ${attractionObj.state}</p>
        <button id="attractionDetails" value="${attractionObj.id}">Detail Snapshot</button>
	    </section>`
};


// when function is invoked, passes Obj through to display specific details of each object in the array in an alert box
export const showAttractionDetails = (attractionObj) => {

    alert (
        `${attractionObj.name} \r\n
        ${attractionObj.description} \r\n
        Restroom available: ${attractionObj.ameneties.restrooms}
        `
    )
}
// \r\n breaks the returned line (works same as <br>)