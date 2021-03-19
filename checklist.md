# MVP?
- [ ] MVP
- [x] Itinerary Goals
- [ ] Syling Goals
- [ ] Stretch Goals

## Building the Itinerary
- [x] List all national parks in a dropdown. When user chooses one, display the name of the park in the Itinerary Preview section.

- [x] List all bizarraries in a dropdown. When user chooses one, display the name of the bizarre attraction in the Itinerary Preview section.

- [x] List all eateries in a dropdown. When user chooses one, display the name of the eatery in the Itinerary Preview section.

## Itinerary Details
- [x] In the Itinerary Preview section, there should be a button labeled Save Itinerary. It should be disabled by default.

- [x] When the user has selected a park, and the name of the park has been added to the Itinerary Preview section, query the Open Weather API and display the 5 day forecast for that location. This will allow the user to see if they want to make the trip soon.

- [x] When the user adds any item to the Itinerary Preview, there should be a Details button next to the name of the item.

- [x] When the user clicks on any detail button for an itinerary item, a dialog box should be presented to the user with more information about that item (description, address, etc...).

- [x] Once the user has selected a park, a bizarre attraction, and an eatery, the Save Itinerary button should be enabled.

- [x] When the user clicks the Save Itinerary button, the chosen items should be saved as an object in your own, local API that is managed by json-server. Each saved itinerary should appear in an aside bar on the right side of the UI.

## Styling Goals
- [ ] finish styling

# Stretch Goals
### Directions
- [ ] Directions Stretch Goal
### Directions Components
- [ ] Refactor your application to add a Get Directions button to each HTML representation of the itinerary. When the user clicks that button for an itinerary, the user should be presented with step-by-step instructions for the trip.
- [ ] All 4 locations (Nashville, bizarrerie, eatery, and national park) need to be sent to Geocoding API to the the latitude and longitude for each one.
- [ ] Then all 4 lat/long pairs should be in the URL for the request to the Routing API.
- [ ] The step-by-step instructions in the response from the Routing API should be displayed below the Itinerary Preview section.

### Multiple Stops
- [ ] Multiple Stops for Eateries & Attraction Goal 
### Multiple Stops Goals
- [ ] the user can still only pick one national park as the destination, but multiple bizarreries, and multiple eateries can be chosen as waypoints along the way.

