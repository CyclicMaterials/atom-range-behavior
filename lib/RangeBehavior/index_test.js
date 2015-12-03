/**
 * @fileoverview Tests for RangeBehavior
 * @author Frederik Krautwald
 */

/* eslint max-nested-callbacks: 0, max-len: 0, no-unused-expressions: 0 */
/* global describe, it */

'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _model = require('./model');

var _model2 = _interopRequireDefault(_model);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _rx = require('rx');

var expect = _chai2['default'].expect;

describe('RangeBehavior', function () {
  it('should be a function', function () {
    expect(_index2['default']).to.be.a('function');
  });

  it('should output a sinks-object', function () {
    var rangeBehavior = (0, _index2['default'])({ props$: _rx.Observable.just({}) });
    expect(rangeBehavior).to.be.an('object');
  });

  describe('sinks', function () {
    describe('state$ sink', function () {
      it('should be an Observable<object>', function (done) {
        var _RangeBehavior = (0, _index2['default'])({ props$: _rx.Observable.just({}) });

        var state$ = _RangeBehavior.state$;

        expect(state$).to.respondTo('subscribe');
        state$.subscribe(function (state) {
          expect(state).to.be.an('object');
          done();
        });
      });

      it('should output model', function (done) {
        var props = {
          max: 11,
          min: 1,
          step: 2,
          value: 5
        };
        var props$ = _rx.Observable.just(props);

        var _RangeBehavior2 = (0, _index2['default'])({ props$: props$ });

        var state$ = _RangeBehavior2.state$;

        var modelState$ = (0, _model2['default'])({ props$: props$ });
        modelState$.combineLatest(state$, function (modelState, state) {
          return { modelState: modelState, state: state };
        }).subscribe(function (states) {
          expect(states.state).to.deep.equal(states.modelState);
        });
        done();
      });
    });

    describe('ratioCalc', function () {
      it('should be a function', function () {
        var _RangeBehavior3 = (0, _index2['default'])({ props$: _rx.Observable.just({}) });

        var ratioCalc = _RangeBehavior3.ratioCalc;

        expect(ratioCalc).to.be.a('function');
      });
    });

    describe('clampedValue', function () {
      it('should be a function', function () {
        var _RangeBehavior4 = (0, _index2['default'])({ props$: _rx.Observable.just({}) });

        var clampedValue = _RangeBehavior4.clampedValue;

        expect(clampedValue).to.be.a('function');
      });
    });

    describe('stepCalc', function () {
      it('should be a function', function () {
        var _RangeBehavior5 = (0, _index2['default'])({ props$: _rx.Observable.just({}) });

        var stepCalc = _RangeBehavior5.stepCalc;

        expect(stepCalc).to.be.a('function');
      });
    });
  });
});