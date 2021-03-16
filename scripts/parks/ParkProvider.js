import { settings } from "../Settings.js";

let parsedParks = [];

export const useParks = () => {
    return parsedParks;
}

export const getParks = () => {
    return fetch(`https://developer.nps.gov/api/v1/parks?api_key=${settings.npsKey}`)
        .then(response => response.json())
        .then(parsedResponse => {
            parsedParks = parsedResponse.data;
            return parsedResponse;
        })
}