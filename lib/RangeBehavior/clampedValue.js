/**
 * @fileoverview Clamped value for RangeBehavior
 * @author Frederik Krautwald
 * @copyright 2015 Cyclic Materials. All rights reserved.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _stepCalc = require('./stepCalc');

var _stepCalc2 = _interopRequireDefault(_stepCalc);

function clampedValue(_ref) {
  var value = _ref.value;
  var step = _ref.step;
  var min = _ref.min;
  var max = _ref.max;

  return Math.min(max, Math.max(min, (0, _stepCalc2['default'])({ value: value, step: step, min: min })));
}

exports['default'] = clampedValue;
module.exports = exports['default'];