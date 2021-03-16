export const attractionRepresentation = (attractionObj) => {
    return `
        <section id="attractionObj" class="attractionObj">
        <p class="attractionObj">${attractionObj.name}</p>
        <p class="attractionObj"> ${attractionObj.city}</p>
        <p class="attractionObj"> ${attractionObj.state}</p>
        <button id="eateryDetails">Details</button>
	    </section>
        `
    };