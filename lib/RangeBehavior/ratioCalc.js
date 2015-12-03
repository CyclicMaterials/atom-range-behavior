/**
 * @fileoverview Ratio calculation for RangeBehavior
 * @author Frederik Krautwald
 * @copyright 2015 Cyclic Materials. All rights reserved.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _clampedValue = require('./clampedValue');

var _clampedValue2 = _interopRequireDefault(_clampedValue);

function ratioCalc(_ref) {
  var value = _ref.value;
  var step = _ref.step;
  var min = _ref.min;
  var max = _ref.max;

  return ((0, _clampedValue2['default'])({ value: value, step: step, min: min, max: max }) - min) / (max - min);
}

exports['default'] = ratioCalc;
module.exports = exports['default'];