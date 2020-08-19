const { nextISSTimesForMyLocation } = require('./iss_promised');
const request = require('request');
const printPassTimes = require('./index.js');

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });