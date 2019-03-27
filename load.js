var fs = require('fs');
var path = require('path');

/**
 * Loads records from the dataset
 * @param {string} inputFile path to the input (json) file of mls records
 * @param {string} mls the mls the dataset came from
 * @returns {array} an array of Properties from the dataset
 */
function load(inputFile, mls) {
  var converter = require(path.join(__dirname, mls + '.js'));
  var input = JSON.parse(fs.readFileSync(inputFile, 'utf-8'));
  var properties = [];
  input.forEach(record => {
    try {
      var property = converter(record);
      properties.push(property);
    } catch (e) {
      console.error(e.message);
    }
  });
  return properties;
}

module.exports = load;

// first parameter is the node executable
// second is the name of this file
// third is the dataset to load
// fourth is the mls the data is from
// we assume we know the mls the data came from
// if we don't know the source of the mls, we would have to investigate each
// record and look for know spots for the mls, like date_name and name
//var properties = load(process.argv[2], process.argv[3]);
//console.log(properties);