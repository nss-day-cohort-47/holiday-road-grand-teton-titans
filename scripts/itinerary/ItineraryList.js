import { getItinerary } from "../data/DataManager.js";
import { itineraryEntryComponent } from "./ItineraryEntry.js";

export const itineraryList = () => {
    // Pull entries from the API
    getItinerary()
        // After promise is resolved, return the array as allItineraries
        .then(allItineraries => {
            // Assign correct position in DOM to variable. 
            const itineraryElement = document.querySelector("aside")
            // Set empty HTML representation to later inject itineraries into.
            let itineraryHTMLRepresentation = "";

            // forEach loop to work through the array.
            allItineraries.forEach(singleItinerary => {
                itineraryHTMLRepresentation += itineraryEntryComponent(singleItinerary);
            })

            console.log("Itinerary 1", itineraryHTMLRepresentation);
            itineraryElement.innerHTML = itineraryHTMLRepresentation;
            console.log(itineraryElement.innerHTML);
        })
}