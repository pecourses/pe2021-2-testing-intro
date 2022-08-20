const assert = require('assert');
const { sum } = require('../utils/math');
const { expect } = require('chai');
//  describe('описание', функция с тестами)

describe('Testing math.sum', function () {
  it('should return 4 when 2+2', function () {
    // fuction from assertion lib
    // assert(real value, expected value);
    assert.equal(sum(2, 2), 4);
  });

  it('should return 4 when "2"+"2"', function () {
    assert.equal(sum('2', '2'), 4);
  });

  describe('should return NaN', function () {
    it('should return NaN when {} + 2', function () {
      assert.equal(sum({}, 2), NaN);
    });

    it('should return NaN when undefined + 2', function () {
      const expected = NaN;
      const result = sum(undefined, 2);
      assert.equal(result, expected);
    });
  });

  describe('paremeters are Number.MAX_VALUE', function () {
    it('should return not finite when Number.MAX_VALUE + Number.MAX_VALUE', function () {
      const result = sum(Number.MAX_VALUE + Number.MAX_VALUE);
      expect(result).to.not.be.finite;
    });
  });
});
