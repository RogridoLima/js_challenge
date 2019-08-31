const equal = require('assert');
const superSort = require('../sort');

describe('Order an array', function() {
  describe('#superSort()', function() {
    it('should order an array properly!', function() {
      equal(superSort([3,5,4,1,2]), [1,2,3,4,5]);
    });
  });
});
