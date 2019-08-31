const equal = require('assert');
const convertStringToData = require('../convert');

describe('Parse data in Brazillian format properly!', function() {
  describe('#convertStringToData()', function() {
    it('should return a valid date instance when valid string is provided!', function() {
      equal(convertStringToData('10/02/2019'), new Date(2019, 2, 10));
    });
  });
});
