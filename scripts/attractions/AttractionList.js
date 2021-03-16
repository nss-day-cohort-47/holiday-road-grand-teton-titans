import { AttractionDropDownHTML } from "./AttractionDropDown.js";
import { attractionRepresentation} from "./AttractionPreview.js";

export const attractionList = (attractionArray) => {
    const navElement = document.getElementById("attractionSelect");

    let attractionDropDownHTMLRepresentation = "";

    for (const anAttraction of attractionArray) {
        attractionDropDownHTMLRepresentation += AttractionDropDownHTML(anAttraction); 
    }
    navElement.innerHTML = attractionDropDownHTMLRepresentation;
}


export const bizarreList = (object) => {
   const contentTarget = document.querySelector(".attractionCard")
    let attractionDisplay = attractionRepresentation(object)
    contentTarget.innerHTML = attractionDisplay
}