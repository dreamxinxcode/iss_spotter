// // const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');


// // fetchMyIP((error, ip) => {
// //   if (error) {
// //     console.log("It didn't work!" , error);
// //     return;
// //   } else {
// //     console.log('It worked! Returned IP:' , ip);
// //   }
// // });


// // fetchCoordsByIP('50.92.124.90', (error, coords) => {
// //   if (error) {
// //     console.log("It didn't work", error);
// //     return;
// //   }
// //   console.log('It worked! Returned Coords:' , coords);
// // });


// // fetchISSFlyOverTimes({ latitude: '48.37460', longitude: '-123.72760' }, (error, passTimes) => {
// //   if (error) {
// //     console.log("It didn't work", error);
// //     return;
// //   } else {
// //     console.log('It worked! Returned flyover times:' , passTimes);
// //   }
// // });

// const { nextISSTimesForMyLocation } = require('./iss');

// nextISSTimesForMyLocation((error, passTimes) => {
//   if (error) {
//     return console.log("It didn't work!", error);
//   }
//   // success, print out the deets!
//   console.log(passTimes);
// });
const { nextISSTimesForMyLocation } = require('./iss');

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});
