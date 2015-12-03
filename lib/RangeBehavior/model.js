/**
 * @fileoverview Model for RangeBehavior
 * @author Frederik Krautwald
 * @copyright 2015 Cyclic Materials. All rights reserved.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _ratioCalc = require('./ratioCalc');

var _ratioCalc2 = _interopRequireDefault(_ratioCalc);

function model(_ref) {
  var props$ = _ref.props$;

  return props$.map(function (_ref2) {
    var _ref2$max = _ref2.max;
    var max = _ref2$max === undefined ? 100 : _ref2$max;
    var _ref2$min = _ref2.min;
    var min = _ref2$min === undefined ? 0 : _ref2$min;
    var _ref2$step = _ref2.step;
    var step = _ref2$step === undefined ? 1 : _ref2$step;
    var _ref2$value = _ref2.value;
    var value = _ref2$value === undefined ? 0 : _ref2$value;

    var ratio = (0, _ratioCalc2['default'])({ value: value, step: step, min: min, max: max }) * 100;
    return { max: max, min: min, ratio: ratio, step: step, value: value };
  });
}

exports['default'] = model;
module.exports = exports['default'];