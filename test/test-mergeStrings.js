var assert = require('assert');
var mergeStrings = require('../mergeStrings.js');
describe('mergeStrings', function () {

  describe('test both strings null', function () {
    it("should return null", function () {
      var c = mergeStrings(undefined, undefined);
      console.log(c);
      assert.strictEqual(mergeStrings(undefined, undefined), undefined);
    });
  });

  describe('test null first string', function () {
    it("should return 'stuvwx'", function () {
      assert.strictEqual(mergeStrings(null, 'stuvwx'), 'stuvwx');
    });
  });

  describe('test null string', function () {
    it("should return 'abc'", function () {
      assert.strictEqual(mergeStrings('abc', null), 'abc');
    });
  });

  describe('test empty first string', function () {
    it("should return 'stuvwx'", function () {
      assert.strictEqual(mergeStrings('', 'stuvwx'), 'stuvwx');
    });
  });

  describe('test empty second string', function () {
    it("should return 'abc'", function () {
      assert.strictEqual(mergeStrings('abc', ''), 'abc');
    });
  });

  describe("merge 'abc' and 'stuvwx'", function () {
    it("should return 'asbtcuvwx'", function () {
      assert.strictEqual(mergeStrings('abc', 'stuvwx'), 'asbtcuvwx');
    });
  });

  describe("merge 'z' and 'stuvasdfasdfwx'", function () {
    it("should return 'zstuvasdfasdfwx'", function () {
      assert.strictEqual(mergeStrings('z', 'stuvasdfasdfwx'), 'zstuvasdfasdfwx');
    });
  });

  describe("merge 'asdfawefsdfsdf' and 'a'", function () {
    it("should return 'aasdfawefsdfsdf'", function () {
      assert.strictEqual(mergeStrings('asdfawefsdfsdf', 'a'), 'aasdfawefsdfsdf');
    });
  });


});