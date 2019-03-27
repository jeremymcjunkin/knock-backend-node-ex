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