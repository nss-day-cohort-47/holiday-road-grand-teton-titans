// Render Itinerary to the HTML
export const itineraryEntryComponent = (itinerary) => {
    return      `<section id="itinerary-${itinerary.id}">
                    <h2>Trip ${itinerary.id}</h2>
                    <h3>${itinerary.parkPreviewName}</h3>
                    <p>${itinerary.parkPreviewLocation}</p>
                    <h3>${itinerary.attractionPreviewName}</h3>
                    <p>${itinerary.attractionPreviewLocation}</p>
                    <h3>${itinerary.eateryPreviewName}</h3>
                    <p>${itinerary.eateryPreviewLocation}</p>
                </section>`
};