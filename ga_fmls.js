var Property = require('./property.js');

function convert(input) {
  var zipcode = parseInt(input.address_components.zipcode);
  var list = Number(input.list.replace(/[^0-9.-]+/g, ""));
  var date = new Date(input.date).getTime() / 1000;
  if (input.property) {
    var bed_count = input.property['bed_count'] ? parseInt(input.property.bed_count) : undefined;
    var bath_count = input.property['bath_count'] ? parseInt(input.property.bath_count) : undefined;
    var half_bath_count = input.property['half_bath_count'] ? parseInt(input.property.half_bath_count) : undefined;
    var square_feet = input.property['square_feet'] ? parseInt(input.property.square_feet) : undefined;
  }
  return new Property(input.data_name, input.vendor_id, input.address_components.address, input.address_components.city, input.address_components.state, zipcode, list, date, bed_count, bath_count, half_bath_count, square_feet);
}

module.exports = convert;