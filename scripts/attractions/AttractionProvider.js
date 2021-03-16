// An initial empty array.
let parsedAttractions = [];

// An exported function that returns the array.
export const useAttractions = () => {
    return [...parsedAttractions];
};

// An exported function that fetches the data.
export const getAttractions = () => {
    return fetch("http://holidayroad.nss.team/bizarreries")
        .then(response => response.json())
        .then(parsedResponse => {
            parsedAttractions = parsedResponse;
            return parsedResponse;
        })
};