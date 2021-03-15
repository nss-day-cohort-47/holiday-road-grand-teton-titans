import { getAttractions, useAttractions } from "../scripts/attractions/AttractionProvider.js";
import { getEateries, useEateries } from "../scripts/eateries/EateryProvider.js";
import { getParks, useParks } from "../scripts/parks/ParkProvider.js";
// import { getWeather, useWeather } from "../scripts/weather/WeatherProvider.js";

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Fetch Tests~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// Attraction Fetch ---------------------------------------------------------------------
getAttractions()
    .then(useAttractions())

let attractionList = useAttractions();
console.log("Attraction Test Fetch", attractionList);

// Eatery Fetch -------------------------------------------------------------------------
getEateries();
let eateryList = useEateries();
console.log("Eatery Test Fetch", eateryList);

// Park Fetch ---------------------------------------------------------------------------
getParks();
let parkList = useParks();
console.log("Park Test Fetch", parkList);

// Weather Fetch ------------------------------------------------------------------------
// getWeather(5, 5)
// let weatherList = useWeather();
// console.log("Weather Test Fetch", weatherList);