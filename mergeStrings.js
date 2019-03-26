/**
 * Merges two strings of varying lengths, appending any remaining characters
 * to the end.  For example you have two strings abc and stuvwx. 
 * Alternating between the two you should return asbtcuvwx.
 * 
 * @private
 * @param {string} a The first string to merge
 * @param {string} b The second string to merge
 * @returns {string} Merged value of the two strings.
 */
function mergeStrings(a, b) {
  if (!a) {
    // an empty string, a null or undefined value
    if (!b) {
      // an empty string, a null or undefined value
      return undefined;
    }
    // since we have a valid value for be, return it
    return b;
  }
  if (!b) {
    // empty string, a null or undefined value, since we have a valid
    // value for a, return it
    return a;
  }
  var result = '';
  // split the strings into arrays to handle each character
  var aArray = a.split('');
  var bArray = b.split('');
  // while we have characters in each arrays, 
  // take the first one and add them to the result string, a string first
  while ((aArray.length > 0) && (bArray.length > 0)) {
    result += aArray.shift() + bArray.shift();
  }
  // at this point, at least one of the arrays will be empty, add the remainder to the result
  if (aArray) {
    result += aArray.join('');
  }
  if (bArray) {
    result += bArray.join('');
  }
  return result;
}

module.exports = mergeStrings;