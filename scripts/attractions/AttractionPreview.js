export const displayAttraction = (attractionObj) => {
    return `
        <section id="attractionObj" class="attractionObj">
        <h2 class="attractionObj">${attractionObj.name}</h2>
        <p class="attractionObj"> ${attractionObj.city}, ${attractionObj.state}</p>
        <button id="attractionDetails">Details</button>
	    </section>
        `
    };