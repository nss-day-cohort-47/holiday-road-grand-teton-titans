// Render Itinerary to the HTML
export const itineraryEntryComponent = (itinerary) => {
    return      `<section id="itinerary-${itinerary.id}">
                    <h2>${itinerary.parkPreviewName}</h2>
                    <p>${itinerary.parkPreviewLocation}</p>
                    <h2>${itinerary.attractionPreviewName}</h2>
                    <p>${itinerary.attractionPreviewLocation}</p>
                    <h2>${itinerary.eateryPreviewName}</h2>
                    <p>${itinerary.eateryPreviewLocation}</p>
                </section>`;
}