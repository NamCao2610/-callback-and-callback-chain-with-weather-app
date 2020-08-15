const request = require("request");
const chalk = require("chalk");

//Get data from api.weatherstack
// const url =
//   "http://api.weatherstack.com/current?access_key=1cfdba09cc1d6dffe03bd686a480bb89&query=";

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log(chalk.red.inverse.bold("Unable to connect to weather service"));
//   } else if (response.body.error) {
//     console.log(chalk.red.inverse.bold(response.body.error.info));
//   } else {
//     console.log(
//       response.body.current.weather_descriptions[0] +
//         " it is currently " +
//         response.body.current.temperature +
//         " and % feels like " +
//         response.body.current.feelslike
//     );
//   }
// });

const geocodeUrl =
  "http://api.mapbox.com/geocoding/v5/mapbox.places/hanoi.json?access_token=pk.eyJ1IjoibmFtZHpwcm8iLCJhIjoiY2tkdXYydTl4MmQ1bDJycXFkOWJnbWd0OCJ9.H53K_bM51O6Xgf_Nyp2I4A&limit=5";

request({ url: geocodeUrl, json: true }, (error, response) => {
  if (error) {
    console.log(chalk.red.bold("Unable to connect to map service"));
  } else if (response.body.message) {
    console.log(chalk.red.bold(response.body.message));
  } else if (response.body.features.length === 0) {
    console.log(chalk.red.bold("Unable to find location. Try another search."));
  } else {
    const latitude = response.body.features[2].center[1];
    const longitude = response.body.features[2].center[0];
    console.log(chalk.green.bold(latitude, longitude));
  }
});
