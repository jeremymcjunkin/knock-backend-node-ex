var ncscCmls = require('../ncsc_cmls.js');
var assert = require('assert');

describe('ncscCmls', function () {

  describe('test valid input with property info', function () {
    it("should be a valid property", function () {
      var input = {
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
      };
      var property = ncscCmls(input);
      assert.strictEqual(property.mls_name, 'ncsc_cmls');
      assert.strictEqual(property.mls_id, '53728');
      assert.strictEqual(property.street_address, '256 Old Mill');
      assert.strictEqual(property.city, 'Charlotte');
      assert.strictEqual(property.state, 'NC');
      assert.strictEqual(property.zip_code, 28269);
      assert.strictEqual(property.list_price, 299999);
      assert.strictEqual(property.list_date, 1526284800);
      assert.strictEqual(property.bedrooms, 4);
      assert.strictEqual(property.full_baths, 3);
      assert.strictEqual(property.half_baths, undefined);
      assert.strictEqual(property.size, 1975);
    });
  });

  // property info isn't required, let's make sure that doesn't mess anything up
  describe('test valid input without property info', function () {
    it("should be a valid property", function () {
      var input = {
        "name": "ncsc_cmls",
        "id": "53728",
        "geo": {
          "address": "256 Old Mill",
          "city": "Charlotte",
          "state": "NC",
          "zip": "28269"
        },
        "listing": {
          "price": "299,999.00"
        },
        "created": "2018-05-14 03:00:00 EST"
      };
      var property = ncscCmls(input);
      assert.strictEqual(property.mls_name, 'ncsc_cmls');
      assert.strictEqual(property.mls_id, '53728');
      assert.strictEqual(property.street_address, '256 Old Mill');
      assert.strictEqual(property.city, 'Charlotte');
      assert.strictEqual(property.state, 'NC');
      assert.strictEqual(property.zip_code, 28269);
      assert.strictEqual(property.list_price, 299999);
      assert.strictEqual(property.list_date, 1526284800);
      assert.strictEqual(property.bedrooms, undefined);
      assert.strictEqual(property.full_baths, undefined);
      assert.strictEqual(property.half_baths, undefined);
      assert.strictEqual(property.size, undefined);
    });
  });

  // property info isn't required, let's make sure that doesn't mess anything up
  describe('test valid input with some property info', function () {
    it("should be a valid property", function () {
      var input = {
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
          "bathrooms": "3"
        },
        "created": "2018-05-14 03:00:00 EST"
      };
      var property = ncscCmls(input);
      assert.strictEqual(property.mls_name, 'ncsc_cmls');
      assert.strictEqual(property.mls_id, '53728');
      assert.strictEqual(property.street_address, '256 Old Mill');
      assert.strictEqual(property.city, 'Charlotte');
      assert.strictEqual(property.state, 'NC');
      assert.strictEqual(property.zip_code, 28269);
      assert.strictEqual(property.list_price, 299999);
      assert.strictEqual(property.list_date, 1526284800);
      assert.strictEqual(property.bedrooms, undefined);
      assert.strictEqual(property.full_baths, 3);
      assert.strictEqual(property.half_baths, undefined);
      assert.strictEqual(property.size, undefined);
    });
  });
  // let's give a nice sanity check if one of the required values is missing
  describe('test undefined city', function () {
    it("should be a valid property", function () {
      var input = {
        "name": "ncsc_cmls",
        "id": "53728",
        "geo": {
          "address": "256 Old Mill",
          "city": "",
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
      };
      try {
        var property = ncscCmls(input);
        assert.fail('should have thrown an error');
      } catch (e) {
        assert.strictEqual(e.message, 'city is required');
      }
    });
  });

});