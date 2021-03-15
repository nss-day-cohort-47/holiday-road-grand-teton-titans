// import { settings } from "../Settings.js";

// //? Set parameters to take in a latitude and longitude in fetch call?
// export const getDirections = (startLat, startLng, endLat, endLng) => {
//     return fetch(`https://graphhopper.com/api/1/route?point=${startLat},${startLng}&point=${endLat},${endLng}&vehicle=car&locale=us&instructions=true&calc_points=true&key=${settings.graphhopperKey}`)
//         .then(response => response.json())
//         .then(parsedResponse => {
//             return parsedResponse;
//         })
// }