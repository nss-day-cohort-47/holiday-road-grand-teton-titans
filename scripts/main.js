import { getAttractions, useAttractions } from "./attractions/AttractionProvider.js";
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
const eateryElement = document.querySelector("#eaterySelect");
eateryElement.addEventListener("change", (event) => {
    console.log(event.target.value);
    debugger

    // displayEatery(event.target.value)
})
//!businesss name includes name of business 

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

// const parkElement = document.querySelector("nav")
// parkElement.addEventListener("change", (event) => {
// 	if (event.target.id === "#parkOption") {
// 		console.log(parkElement);
// 	}
// })
