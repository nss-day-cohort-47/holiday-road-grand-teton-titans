import { getAttractions, useAttractions } from "../scripts/attractions/AttractionProvider.js";
import { getEateries, useEateries } from "../scripts/eateries/EateryProvider.js";
import { getParks, useParks } from "../scripts/parks/ParkProvider.js";
// import { getWeather, useWeather } from "../scripts/weather/WeatherProvider.js";

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Fetch Tests~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// Attraction Fetch ---------------------------------------------------------------------
getAttractions()
    .then(attractionArray => {
        console.log("Attraction Test Fetch", attractionArray);
    })

// Eatery Fetch -------------------------------------------------------------------------
getEateries()
    .then(eateryArray => {
        console.log("Eatery Test Fetch", eateryArray);
    })

// Park Fetch ---------------------------------------------------------------------------
getParks()
    .then(parksArray => {
        console.log("Park Test Fetch", parksArray);
    })

// Weather Fetch ------------------------------------------------------------------------
// getWeather(5, 5)
// let weatherList = useWeather();
// console.log("Weather Test Fetch", weatherList);