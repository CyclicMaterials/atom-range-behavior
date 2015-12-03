/**
 * @fileoverview Tests for RangeBehavior/clampedValue
 * @author Frederik Krautwald
 */

/* eslint max-nested-callbacks: 0, max-len: 0, no-unused-expressions: 0 */
/* global describe, it */

'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _clampedValue = require('./clampedValue');

var _clampedValue2 = _interopRequireDefault(_clampedValue);

var expect = _chai2['default'].expect;

describe('RangeBehavior', function () {
  describe('clampedValue', function () {
    it('should be a function', function () {
      expect(_clampedValue2['default']).to.be.a('function');
    });

    it('should return a <number>', function () {
      var value = (0, _clampedValue2['default'])({ value: 0 });
      expect(value).to.be.a('number');
    });
  });
});