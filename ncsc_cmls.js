var Property = require('./property.js');

/**
 * Converts data from NCSC CMLS into a standard Property object
 * Example:
  {
    "name": "ncsc_cmls",
    "id": "53728",
    "geo": {
      "address": "256 Old Mill",
      "city": "Charlotte",
      "state": "NC",
      "zip": "28269"
    },
    "listing": {
      "price": "299,999.00",
      "bedrooms": "4",
      "bathrooms": "3",
      "square_feet": "1975"
    },
    "created": "2018-05-14 03:00:00 EST"
  }
 * @param {Object} input data from the NCSC CMLS
 * @returns {Property} the property it was converted into
 */
function convert(input) {
  // parse the zipcode into an int
  var zipcode = parseInt(input.geo.zip);
  // remove unncessary characters from the price like $ and the decimals
  // I don't think anyone is worrying about rounding a house price
  var list = Number(input.listing.price.replace(/[^0-9.-]+/g, ""));
  // convert the data to seconds since epoch
  var date = new Date(input.created).getTime() / 1000;
  // if we don't have the non-required data, use undefined
  var bed_count = input.listing['bedrooms'] ? parseInt(input.listing.bedrooms) : undefined;
  var bath_count = input.listing['bathrooms'] ? parseInt(input.listing.bathrooms) : undefined;
  var square_feet = input.listing['square_feet'] ? parseInt(input.listing.square_feet) : undefined;
  return new Property(input.name, input.id, input.geo.address, input.geo.city, input.geo.state, zipcode, list, date, bed_count, bath_count, undefined, square_feet);
}

module.exports = convert;