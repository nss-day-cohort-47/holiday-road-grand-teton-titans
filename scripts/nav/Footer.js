export const displaySave = () => {
    const navElement = document.querySelector("footer");
    let saveButton = `<button id="saveItinerary">Save Itinerary</button>`;
    navElement.innerHTML = saveButton;
}