var Property = require('./property.js');

/**
 * Converts data from GA FMLS into a standard Property object
 * Example:
  {
    "data_name": "ga_fmls",
    "vendor_id": "76257",
    "address_components": {
      "address": "176 Milton Ave, Atlanta, GA 30317",
      "street_name": "Milton",
      "street_number": "176",
      "street_suffix": "Ave",
      "city": "Atlanta",
      "state": "GA",
      "zipcode": "30317"
    },
    "list": "$275,000",
    "date": "2018-05-02T04:19:27-04:00",
    "property": {
      "bed_count": "3",
      "bath_count": "2",
      "half_bath_count": "1",
      "square_feet": "2300"
    }
  }
 * @param {Object} input data from the GA FMLS
 * @returns {Property} the property it was converted into
 */
function convert(input) {
  // parse the zipcode into an int
  var zipcode = parseInt(input.address_components.zipcode);
  // remove unncessary characters from the price like $ and the decimals
  // I don't think anyone is worrying about rounding a house price
  var list = Number(input.list.replace(/[^0-9.-]+/g, ""));
  // convert the data to seconds since epoch
  var date = new Date(input.date).getTime() / 1000;
  // if we don't have the non-required data, use undefined
  if (input.property) {
    var bed_count = input.property['bed_count'] ? parseInt(input.property.bed_count) : undefined;
    var bath_count = input.property['bath_count'] ? parseInt(input.property.bath_count) : undefined;
    var half_bath_count = input.property['half_bath_count'] ? parseInt(input.property.half_bath_count) : undefined;
    var square_feet = input.property['square_feet'] ? parseInt(input.property.square_feet) : undefined;
  }
  return new Property(input.data_name, input.vendor_id, input.address_components.address, input.address_components.city, input.address_components.state, zipcode, list, date, bed_count, bath_count, half_bath_count, square_feet);
}

module.exports = convert;