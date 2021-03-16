export const displayAttraction = (attractionObj) => {
    return `
        <section id="attractionObj" class="attractionObj">
        <p class="attractionObj">${attractionObj.name}</p>
        <p class="attractionObj"> ${attractionObj.city}, ${attractionObj.state}</p>
        <button id="attractionDetails">Details</button>
	    </section>
        `
    };