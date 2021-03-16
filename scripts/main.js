import { getAttractions } from "./attractions/AttractionProvider.js";
import { attractionList } from "./attractions/AttractionList.js";

import { getEateries } from "./eateries/EateryProvider.js";
import { eateryList } from "./eateries/EateryList.js";
import { displayEatery } from "./eateries/EateryPreview.js";

import { getParks } from "./parks/ParkProvider.js";
import { parkList } from "./parks/ParkList.js";

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