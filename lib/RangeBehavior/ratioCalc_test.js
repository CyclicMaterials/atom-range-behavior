/**
 * @fileoverview Tests for RangeBehavior/ratioCalc
 * @author Frederik Krautwald
 */

/* eslint max-nested-callbacks: 0, max-len: 0, no-unused-expressions: 0 */
/* global describe, it */

'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _ratioCalc = require('./ratioCalc');

var _ratioCalc2 = _interopRequireDefault(_ratioCalc);

var expect = _chai2['default'].expect;

describe('RangeBehavior', function () {
  describe('ratioCalc', function () {
    it('should be a function', function () {
      expect(_ratioCalc2['default']).to.be.a('function');
    });

    it('should return a <number>', function () {
      var ratio = (0, _ratioCalc2['default'])({ value: 5, step: 2, min: 3, max: 45 });
      expect(ratio).to.be.a('number');
      expect(ratio).to.equal(0.047619047619047616);

      ratio = (0, _ratioCalc2['default'])({ value: 5, step: 2, min: 1, max: 11 });
      expect(ratio).to.equal(0.4);
    });
  });
});