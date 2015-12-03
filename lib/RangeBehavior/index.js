/**
 * @fileoverview RangeBehavior dataflow component
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

var _model = require('./model');

var _model2 = _interopRequireDefault(_model);

var _ratioCalc = require('./ratioCalc');

var _ratioCalc2 = _interopRequireDefault(_ratioCalc);

var _stepCalc = require('./stepCalc');

var _stepCalc2 = _interopRequireDefault(_stepCalc);

function RangeBehavior(_ref) {
  var props$ = _ref.props$;

  var state$ = (0, _model2['default'])({ props$: props$ });
  return {
    clampedValue: _clampedValue2['default'],
    ratioCalc: _ratioCalc2['default'],
    state$: state$,
    stepCalc: _stepCalc2['default']
  };
}

exports['default'] = RangeBehavior;
module.exports = exports['default'];