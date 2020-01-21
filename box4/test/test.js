const equal = require('assert');
require('../improvedArrays.js');


describe('Quicksort on any array. Yay!', function() {
  describe('#superArray#', function() {
    it('all arrays should have quickSort!', function() {
      equal([3,5,4,1,2].quickSort(), [1,2,3,4,5]);
    });
  });
});
