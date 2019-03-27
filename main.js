// first parameter is the node executable
// second is the name of this file
// third is the dataset to load
// fourth is the mls the data is from
// we assume we know the mls the data came from
// if we don't know the source of the mls, we would have to investigate each
// record and look for know spots for the mls, like date_name and name
// fifth parameter is the customer id
var load = require('./load.js');
var inputFile = process.argv[2];
var mls = process.argv[3];
var properties = load(inputFile, mls);
console.log("Properties loaded from file " + inputFile + " for mls " + mls);
console.log(properties);
var services = require('./services.js');
var customerId = process.argv[4];
console.log('Customer id: ' + customerId);
properties.forEach(property => {
  services.addProperty(property, customerId).then(console.log);
});