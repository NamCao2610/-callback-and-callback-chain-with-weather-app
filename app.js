const request = require("request");
const chalk = require("chalk");
const geocode = require("./untils/geocode");
const forecast = require("./untils/forecast");

const address = process.argv[2];

if (!address) {
  console.log("Please provide an address");
} else {
  geocode(address, (error, { latitude, longitude, location }) => {
    if (error) {
      return console.log(error);
    }

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(chalk.white.bold(location));
      console.log(forecastData);
    });
  });
}
