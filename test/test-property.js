var Property = require('../property.js');
var assert = require('assert');

describe('Property', function () {

  describe('test mls_name is undefined', function () {
    it("should throw error", function () {
      // have to wrap the constructor in anon function to 
      // allow assert to catch it.
      //assert.throws(() => new Property(), Error);
      // not using assert.throws here so I can check the actual 
      // error message is the one I am expecting
      [undefined, null, ''].forEach(value => {
        try {
          new Property(value);
          assert.fail('should have thrown an error');
        } catch (e) {
          assert.strictEqual(e.message, 'mls_name is required');
        }
      });
    });
  });

  describe('test mls_id is undefined', function () {
    it("should throw error", function () {
      [undefined, null, ''].forEach(value => {
        try {
          new Property('ga_fmls', value);
          assert.fail('should have thrown an error');
        } catch (e) {
          assert.strictEqual(e.message, 'mls_id is required');
        }
      });
    });
  });

  describe('test street_address is undefined', function () {
    it("should throw error", function () {
      [undefined, null, ''].forEach(value => {
        try {
          new Property('ga_fmls', '76257');
          assert.fail('should have thrown an error');
        } catch (e) {
          assert.strictEqual(e.message, 'street_address is required');
        }
      });
    });
  });

  describe('test city is undefined', function () {
    it("should throw error", function () {
      [undefined, null, ''].forEach(value => {
        try {
          new Property('ga_fmls', '76257', '176 Milton Ave, Atlanta, GA 30317');
          assert.fail('should have thrown an error');
        } catch (e) {
          assert.strictEqual(e.message, 'city is required');
        }
      });
    });
  });

  describe('test state is undefined', function () {
    it("should throw error", function () {
      [undefined, null, ''].forEach(value => {
        try {
          new Property('ga_fmls', '76257', '176 Milton Ave, Atlanta, GA 30317', 'Atlanta');
          assert.fail('should have thrown an error');
        } catch (e) {
          assert.strictEqual(e.message, 'state is required');
        }
      });
    });
  });

  describe('test zip_code is undefined', function () {
    it("should throw error", function () {
      [undefined, null, ''].forEach(value => {
        try {
          new Property('ga_fmls', '76257', '176 Milton Ave, Atlanta, GA 30317', 'Atlanta', 'GA');
          assert.fail('should have thrown an error');
        } catch (e) {
          assert.strictEqual(e.message, 'zip_code is required');
        }
      });
    });
  });

  describe('test list_price is undefined', function () {
    it("should throw error", function () {
      [undefined, null, ''].forEach(value => {
        try {
          new Property('ga_fmls', '76257', '176 Milton Ave, Atlanta, GA 30317', 'Atlanta', 'GA', 30317);
          assert.fail('should have thrown an error');
        } catch (e) {
          assert.strictEqual(e.message, 'list_price is required');
        }
      });
    });
  });

  describe('test property with values', function () {
    it("should have all values", function () {
      var property = new Property('ga_fmls', '76257', '176 Milton Ave, Atlanta, GA 30317', 'Atlanta', 'GA', 30317, 400000, 1525143600, 5, 3, 1, 4100);
      assert.strictEqual(property.mls_name, 'ga_fmls');
      assert.strictEqual(property.mls_id, '76257');
      assert.strictEqual(property.street_address, '176 Milton Ave, Atlanta, GA 30317');
      assert.strictEqual(property.city, 'Atlanta');
      assert.strictEqual(property.state, 'GA');
      assert.strictEqual(property.zip_code, 30317);
      assert.strictEqual(property.list_price, 400000);
      assert.strictEqual(property.list_date, 1525143600);
      assert.strictEqual(property.bedrooms, 5);
      assert.strictEqual(property.full_baths, 3);
      assert.strictEqual(property.half_baths, 1);
      assert.strictEqual(property.size, 4100);
    });
  });

});