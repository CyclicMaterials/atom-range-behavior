/**
 * @fileoverview Tests for RangeBehavior/stepCalc
 * @author Frederik Krautwald
 */

/* eslint max-nested-callbacks: 0, max-len: 0, no-unused-expressions: 0 */
/* global describe, it */

'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _stepCalc = require('./stepCalc');

var _stepCalc2 = _interopRequireDefault(_stepCalc);

var expect = _chai2['default'].expect;

describe('RangeBehavior', function () {
  describe('stepCalc', function () {
    it('should be a function', function () {
      expect(_stepCalc2['default']).to.be.a('function');
    });

    it('should return a <number>', function () {
      var step = (0, _stepCalc2['default'])({ value: 0 });
      expect(step).to.be.a('number');
    });
  });
});