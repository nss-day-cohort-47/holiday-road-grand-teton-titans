import { getAttractions } from "./attractions/AttractionProvider.js";
import { attractionList, bizarreList } from "./attractions/AttractionList.js";

import { getEateries, useEateries } from "./eateries/EateryProvider.js";
import { eateryList } from "./eateries/EateryList.js";
import { displayEatery } from "./eateries/EateryPreview.js";

import { getParks } from "./parks/ParkProvider.js";
import { parkList } from "./parks/ParkList.js";

const parkElement = document.querySelector("#parkSelect");
parkElement.addEventListener("change", (event) => {
    console.log(event.target.value);
})

const attractionElement = document.querySelector("#attractionSelect");
attractionElement.addEventListener("change", (event) => {
    console.log(event.target.value);
})

// Sets an element equal to the eaterySelect ID on the DOM.
const eateryElement = document.querySelector("#eaterySelect");
// An event listen that listens for a dropdown selection, then...
eateryElement.addEventListener("change", (event) => {
    // Assigns the array from the get function to a variable.
    let eaterySelection = useEateries();
    // Loops through the array variable in order to...
    for (let anEatery of eaterySelection) {
        // Find an object in the array with the businessName property equal to what the dropdown menu contains, then...
        if (anEatery.businessName === event.target.value) {
            // Feeds entire object through the display eatery function.
            displayEatery(anEatery);
        }
    }
})

const startItinerary = () => {

    getAttractions()
        .then(attractionArray => {
            attractionList(attractionArray);
        })

    getEateries()
        .then(eateryArray => {
            eateryList(eateryArray);
        })

    getParks()
        .then(parksArray => {
            parkList(parksArray.data);
        })

}

startItinerary();