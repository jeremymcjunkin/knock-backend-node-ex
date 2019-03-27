var gaFmls = require('../ga_fmls.js');
var assert = require('assert');

describe('ga_fmls', function () {

  describe('test valid input with property info', function () {
    it("should be a valid property", function () {
      var input = {
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
      };
      var property = gaFmls(input);
      assert.strictEqual(property.mls_name, 'ga_fmls');
      assert.strictEqual(property.mls_id, '76257');
      assert.strictEqual(property.street_address, '176 Milton Ave, Atlanta, GA 30317');
      assert.strictEqual(property.city, 'Atlanta');
      assert.strictEqual(property.state, 'GA');
      assert.strictEqual(property.zip_code, 30317);
      assert.strictEqual(property.list_price, 275000);
      assert.strictEqual(property.list_date, 1525249167);
      assert.strictEqual(property.bedrooms, 3);
      assert.strictEqual(property.full_baths, 2);
      assert.strictEqual(property.half_baths, 1);
      assert.strictEqual(property.size, 2300);
    });
  });

  // property info isn't required, let's make sure that doesn't mess anything up
  describe('test valid input without property info', function () {
    it("should be a valid property", function () {
      var input = {
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
        "date": "2018-05-02T04:19:27-04:00"
      };
      var property = gaFmls(input);
      assert.strictEqual(property.mls_name, 'ga_fmls');
      assert.strictEqual(property.mls_id, '76257');
      assert.strictEqual(property.street_address, '176 Milton Ave, Atlanta, GA 30317');
      assert.strictEqual(property.city, 'Atlanta');
      assert.strictEqual(property.state, 'GA');
      assert.strictEqual(property.zip_code, 30317);
      assert.strictEqual(property.list_price, 275000);
      assert.strictEqual(property.list_date, 1525249167);
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
          "bath_count": "2"
        }
      };
      var property = gaFmls(input);
      assert.strictEqual(property.mls_name, 'ga_fmls');
      assert.strictEqual(property.mls_id, '76257');
      assert.strictEqual(property.street_address, '176 Milton Ave, Atlanta, GA 30317');
      assert.strictEqual(property.city, 'Atlanta');
      assert.strictEqual(property.state, 'GA');
      assert.strictEqual(property.zip_code, 30317);
      assert.strictEqual(property.list_price, 275000);
      assert.strictEqual(property.list_date, 1525249167);
      assert.strictEqual(property.bedrooms, undefined);
      assert.strictEqual(property.full_baths, 2);
      assert.strictEqual(property.half_baths, undefined);
      assert.strictEqual(property.size, undefined);
    });
  });
  // let's give a nice sanity check if one of the required values is missing
  describe('test undefined city', function () {
    it("should be a valid property", function () {
      var input = {
        "data_name": "ga_fmls",
        "vendor_id": "76257",
        "address_components": {
          "address": "176 Milton Ave, Atlanta, GA 30317",
          "street_name": "Milton",
          "street_number": "176",
          "street_suffix": "Ave",
          "city": "",
          "state": "GA",
          "zipcode": "30317"
        },
        "list": "$275,000",
        "date": "2018-05-02T04:19:27-04:00"
      };
      try {
        var property = gaFmls(input);
        assert.fail('should have thrown an error');
      } catch (e) {
        assert.strictEqual(e.message, 'city is required');
      }
    });
  });

});