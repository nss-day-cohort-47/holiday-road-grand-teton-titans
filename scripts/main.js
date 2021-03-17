import { getAttractions, useAttractions } from "./attractions/AttractionProvider.js";
import { attractionList, bizarreList } from "./attractions/AttractionList.js";
// import { displayAttraction } from "./attractions/AttractionPreview.js";

import { getEateries, useEateries } from "./eateries/EateryProvider.js";
import { eateryList } from "./eateries/EateryList.js";
import { displayEatery } from "./eateries/EateryPreview.js";

import { getParks, useParks } from "./parks/ParkProvider.js";
import { parkList } from "./parks/ParkList.js";
import { displayPark } from "./parks/ParkPreview.js"

import { getWeather, useWeather } from "./weather/WeatherProvider.js";

//? Park Selector and Preview Print
const parkElement = document.querySelector("#parkSelect");
parkElement.addEventListener("change", (event) => {
    let parkSelection = useParks();
    for (let aPark of parkSelection) {
        if (aPark.fullName === event.target.value) {
            displayPark(aPark)
        }
    }
})

//? Attraction Selector and Preview Print
const attractionElement = document.querySelector("#attractionSelect");
attractionElement.addEventListener("change", (event) => {
    let attractionSelection = useAttractions();
    for (let anAttraction of attractionSelection) {
        if (anAttraction.name === event.target.value) {
            bizarreList(anAttraction);
        }
    }
})

//? Eatery Selector and Preview Print
// Sets an element equal to the eaterySelect ID on the DOM.
const eateryElement = document.querySelector("#eaterySelect");
// An event listen that listens for a dropdown selection, then...
eateryElement.addEventListener("change", (event) => {
    debugger
    // Assigns the array from the use function to a variable.
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

const eateryDetailsElement = document.querySelector(".eateryCard");
eateryDetailsElement.addEventListener("click", (event) => {
    if (event.target.id === "eateryDetails") {
        alert(`${eateryObj.businessName}`)
    }
})

//? Drop Down Population
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