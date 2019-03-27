var request = require('request');
/**
 * Calls the CRM endpoint to add a property to the customer's list
 * @param {Property} property the property to be added
 * @param {number} customerId the customer id
 */
function addProperty(property, customerId) {
  return new Promise(function (resolve, reject) {
    console.log("Adding property '" + property.street_address + "' to customer " + customerId);
    request({
      url: 'https://knock-crm.io/customer/' + customerId + '/properties',
      method: 'POST',
      body: JSON.stringify(property),
      headers: {
        'Content-Type': 'application/json'
      }
    }, function (error, resp, body) {
      // ignore error/response here, this is just a mock call
      resolve("Successfully added property '" + property.street_address + "' to customer " + customerId);
    });
  });
}

module.exports.addProperty = addProperty;