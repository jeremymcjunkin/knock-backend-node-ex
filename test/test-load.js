var load = require('../load.js');
var assert = require('assert');
describe('load', function () {

  describe('test non existent input file', function () {
    it("should throw error", function () {
      try {
        load('dne.json', 'ga_fmls');
        assert.fail('should have thrown an error');
      } catch (e) {
        assert.strictEqual(e.message, 'ENOENT: no such file or directory, open \'dne.json\'');
      }
    });
  });

  describe('test non existent mls converter', function () {
    it("should throw error", function () {
      try {
        load('mls_a.json', 'dne');
        assert.fail('should have thrown an error');
      } catch (e) {
        assert.ok(e.message.startsWith('Cannot find module'));
      }
    });
  });



  describe('test loading ga_fmls', function () {
    it("should be a valid property", function () {
      var properties = load('mls_a.json', 'ga_fmls');
      assert.strictEqual(properties.length, 1);
      var property = properties[0];
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

  describe('test loading ncsc_cmls', function () {
    it("should be a valid property", function () {
      var properties = load('mls_b.json', 'ncsc_cmls');
      assert.strictEqual(properties.length, 1);
      var property = properties[0];
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

});