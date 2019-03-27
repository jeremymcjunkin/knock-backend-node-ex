var services = require('../services.js');
var Property = require('../property.js');
var assert = require('assert');

describe('services', function () {

  describe('test addProperty', function () {
    it("should be a valid property", function () {
      services.addProperty(new Property('ga_fmls', '76257', '176 Milton Ave, Atlanta, GA 30317', 'Atlanta', 'GA', 30317, 400000, 1525143600, 5, 3, 1, 4100), 1234);
    });
  });
});