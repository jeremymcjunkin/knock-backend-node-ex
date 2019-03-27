class Property {

  /**
   * A Property with MLS data.
   * 
   * @param {string} mls_name (string, required) which mls the property belongs to
   * @param {string} mls_id (number, required) a unique identifier within the mls supplied
   * @param {string} street_address (string, required) the number and street name of the property
   * @param {string} city (string, required) the name of the city the property is in
   * @param {string} state (string, required) the name of the state the property is in
   * @param {number} zip_code (number, required) a 5 digit value for zip code of the property
   * @param {number} list_price (number, required) how much the property is listed for. This should be an integer, example 400000
   * @param {number} list_date (number, required) a Unix timestamp indicating the date the property was listed on. example 1525143600
   * @param {number} bedrooms (number) how many bedrooms the property has
   * @param {number} full_baths (number) how many full bathrooms the property has
   * @param {number} half_baths (number) how many half bathrooms the property has
   * @param {number} size (number) how many square feet the property has
   */
  constructor(mls_name, mls_id, street_address, city, state, zip_code, list_price, list_date, bedrooms, full_baths, half_baths, size) {
    if (!mls_name) {
      throw new Error('mls_name is required');
    }
    this.mls_name = mls_name;
    if (!mls_id) {
      throw new Error('mls_id is required');
    }
    this.mls_id = mls_id;
    if (!street_address) {
      throw new Error('street_address is required');
    }
    this.street_address = street_address;
    if (!city) {
      throw new Error('city is required');
    }
    this.city = city;
    if (!city) {
      throw new Error('city is required');
    }
    this.city = city;
    if (!state) {
      throw new Error('state is required');
    }
    this.state = state;
    if (!zip_code) {
      throw new Error('zip_code is required');
    }
    this.zip_code = zip_code;
    if ((this.zip_code < 10000) || (this.zip_code > 99999)) {
      throw new Error('zipcode must be 5 digits');
    }
    if (!list_price) {
      throw new Error('list_price is required');
    }
    this.list_price = list_price;
    if (!list_date) {
      throw new Error('list_date is required');
    }
    this.list_date = list_date;
    this.bedrooms = bedrooms;
    this.full_baths = full_baths;
    this.half_baths = half_baths;
    this.size = size;
  }
}

module.exports = Property;