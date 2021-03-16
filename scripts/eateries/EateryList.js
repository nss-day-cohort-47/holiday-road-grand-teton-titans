import { EateryDropDownHTML } from "./EateryDropDown.js";

export const eateryList = (eateryArray) => {
    const navElement = document.getElementById("eaterySelect");

    let eateryDropDownHTMLRepresentation = "";

    for (const anEatery of eateryArray) {
        eateryDropDownHTMLRepresentation += EateryDropDownHTML(anEatery); 
    }
    navElement.innerHTML = eateryDropDownHTMLRepresentation;
}