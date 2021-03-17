import { createItinerary } from "../data/DataManager.js";

export const saveItinerary = () => {
    // Set Application For Event Bubbling
    const applicationElement = document.querySelector("body");
    // Event Listener To Test Capture of All Previewed Locations
    applicationElement.addEventListener("click", event => {
        if (event.target.id === "saveItinerary") {
            // If statement for data validation purpose.
            if (document.getElementById("attractionName") != null || document.getElementById("eateryName") != null || document.getElementById("parkName") != null) {
            // A list of input variables to be created and assigned.
            const attractionPreviewName = document.getElementById("attractionName").innerHTML;
            const attractionPreviewLocation = document.getElementById("attractionLocation").innerHTML;
            const eateryPreviewName = document.getElementById("eateryName").innerHTML;
            const eateryPreviewLocation = document.getElementById("eateryLocation").innerHTML;
            const parkPreviewName = document.getElementById("parkName").innerHTML;
            const parkPreviewLocation = document.getElementById("parkLocation").innerHTML;

            // Make an object with variables.
            const itineraryObject = {
                attractionPreviewName: attractionPreviewName,
                attractionPreviewLocation: attractionPreviewLocation,
                eateryPreviewName: eateryPreviewName,
                eateryPreviewLocation: eateryPreviewLocation,
                parkPreviewName: parkPreviewName,
                parkPreviewLocation: parkPreviewLocation
            };
            
            createItinerary(itineraryObject);
            } else {
                console.log("Nope.");
            }
        }
    })
}