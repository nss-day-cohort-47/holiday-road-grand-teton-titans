import { AttractionDropDownHTML } from "./AttractionDropDown.js";
import { displayAttraction} from "./AttractionPreview.js";

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
    let attractionDisplay = displayAttraction(object)
    contentTarget.innerHTML = attractionDisplay
}