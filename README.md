Fullstack Weather App
Will be using openweatherapp.org/api to get current weather
Sign up for an api key. Click subscribe then choose the Free option.
Click API keys and copy the key. You will need the key for the Axios call.
Go to https://openweathermap.org/current and read how to make calls for one location by city name. Follow their format and Examples of API calls.
Use create-react-app and express-generator to setup skeleton for the frontend and backend
Use .env to hold important information! \* In React's .env must use REACT*APP*

Backend-

1. Set up /location route, connect router, controller and model.
2. Create a location Model
3. Set up all the functionalities in the Controller for these routes:
   _ /get-all-searched-locations
   _ /add-location \* /delete-location-by-id
   Frontend-
   Similar setup to the todo app as a Weather App. Remember to make different components based on functionalities below:
4. Should have an input text to search for weather based on location
5. After you enter the location and search:
   - The current weather will display below with the name of the location searched, country, description and temperature in Fahrenheit or Celsius (API call will return in Kelvin unless you add the units parameter).
   - If the location does not exist, display and error message with location does not exist.
   - The location name will be saved to the backend and it will popup on the left or right side of the page under- Recently Searched Locations (list)
6. Each location in Recently Searched Locations : \* Will have a delete option and removes the item off the list
   Extra Credit: Each location under the recently searched locations are clickable and when you click on it, the weather will update to that location
