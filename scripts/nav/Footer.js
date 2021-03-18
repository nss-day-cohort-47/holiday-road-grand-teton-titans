export const displaySave = () => {
    const navElement = document.querySelector("footer");

    let saveButton = `<button id="saveItinerary" onClick="window.location.reload(true)">Save Itinerary</button>`;

    navElement.innerHTML = saveButton;
}