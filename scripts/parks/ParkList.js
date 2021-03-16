import { ParkDropDownHTML } from "./ParkDropDown.js";

export const parkList = (parkArray) => {
    const navElement = document.getElementById("parkSelect");

    let parkDropDownHTMLRepresentation = "";

    for (const aPark of parkArray) {
        parkDropDownHTMLRepresentation += ParkDropDownHTML(aPark); 
    }
    navElement.innerHTML = parkDropDownHTMLRepresentation;
}