import { AttractionDropDownHTML } from "./AttractionDropDown.js";

export const attractionList = (attractionArray) => {
    const navElement = document.getElementById("attractionSelect");

    let attractionDropDownHTMLRepresentation = "";

    for (const anAttraction of attractionArray) {
        attractionDropDownHTMLRepresentation += AttractionDropDownHTML(anAttraction); 
    }
    navElement.innerHTML = attractionDropDownHTMLRepresentation;
}

