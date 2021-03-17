/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    json-server -p 8090 -w db.json
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

let itineraryCollection = [];

// Exports a function that takes in an object, then...
export const getItinerary = () => {
    // Fetches the JSON file with the intent to get, then...
    return fetch("http://localhost:8090/itineraries")
        // Parses the response, then...
        .then(response => response.json())
        // Feeds the response into the empty collection array.
        .then(parsedResponse => {
            itineraryCollection = parsedResponse;
            return parsedResponse;
        })
}

// Exports a function that returns a modified array (after we invoke getItinerary).
export const useItinerary = () => {
    return [...itineraryCollection];
}

// Exports a function that takes in an object, then...
export const createItinerary = (ItineraryObj) => {
    // Fetches the JSON file with the intent to post, then...
    return fetch("http://localhost:8090/itineraries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        // Posts the object.
        body: JSON.stringify(ItineraryObj)
    })
    .then(response => response.json());
}