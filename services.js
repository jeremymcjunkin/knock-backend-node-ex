var request = require('request');
/**
 * Calls the CRM endpoint to add a property to the customer's list
 * @param {Property} property the property to be added
 * @param {number} customerId the customer id
 */
function addProperty(property, customerId) {
  request({
    url: 'https://knock-crm.io/customer/' + customerId + '/properties',
    method: 'POST',
    body: JSON.stringify(property),
    headers: {
      'Content-Type': 'application/json'
    }
  }, function (error, resp, body) {
    // ignore error/response here, this is just a mock call
  });
}

module.exports.addProperty = addProperty;