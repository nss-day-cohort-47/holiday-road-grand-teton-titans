let parsedAttractions = [];

export const useAttractions = () => {
    return parsedAttractions;
}

export const getAttractions = () => {
    return fetch("http://holidayroad.nss.team/bizarreries")
        .then(response => response.json())
        .then(parsedResponse => {
            parsedAttractions = parsedResponse;
            return parsedResponse;
        })
}