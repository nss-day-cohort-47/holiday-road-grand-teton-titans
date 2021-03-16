import { getAttractions } from "./attractions/AttractionProvider.js";
import { attractionList, bizarreList } from "./attractions/AttractionList.js";

import { getEateries } from "./eateries/EateryProvider.js";
import { eateryList } from "./eateries/EateryList.js";

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


const testObj = {
id: 1,
name: "Big White Shirt",
state: "AL",
city: "Andalusia",
description: "Andalusia, Alabama, is the white dress-shirt capital of America, and this highly photographed enormous white shirt sign is a reminder of that. According to Roadside America, the tie is changed seasonally.",
ameneties: {
    souvenirs: false,
    restrooms: false
}
}
bizarreList(testObj)
