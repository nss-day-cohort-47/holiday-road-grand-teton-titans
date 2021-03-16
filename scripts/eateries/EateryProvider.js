let parsedEateries = [];

export const useEateries = () => {
    return [...parsedEateries];
}

export const getEateries = () => {
    return fetch("http://holidayroad.nss.team/eateries")
        .then(response => response.json())
        .then(parsedResponse => {
            // parsedEateries = parsedResponse;
            return parsedResponse;
        })
}