const request = require("request");

const geocode = (address, callback) => {
  const url =
    "http://api.mapbox.com/geocoding/v5/mapbox.places/" +
    address +
    ".json?access_token=pk.eyJ1IjoibmFtZHpwcm8iLCJhIjoiY2tkdXYydTl4MmQ1bDJycXFkOWJnbWd0OCJ9.H53K_bM51O6Xgf_Nyp2I4A&limit=5";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("unable to connect to map service", undefined);
    } else if (body.message) {
      callback(body.message, undefined);
    } else if (body.features.length === 0) {
      callback("Unable to find location . Try another search", undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[0],
        longitude: body.features[0].center[1],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
