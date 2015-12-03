/**
 * @fileoverview Tests for RangeBehavior/model
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

var _fastJs = require('fast.js');

var _rx = require('rx');

var expect = _chai2['default'].expect;

describe('RangeBehavior', function () {
  describe('model', function () {
    it('should be a function', function () {
      expect(_model2['default']).to.be.a('function');
    });

    it('should output an Observable<Object>', function (done) {
      var props$ = _rx.Observable.just({});
      var state$ = (0, _model2['default'])({ props$: props$ });
      expect(state$).to.respondTo('subscribe');
      state$.subscribe(function (state) {
        expect(state).to.be.an('object');
        done();
      });
    });

    describe('state-object', function () {
      it('should have <Number>value property', function (done) {
        var propName = 'value';
        var props$ = _rx.Observable.just({});
        var state$ = (0, _model2['default'])({ props$: props$ });
        state$.subscribe(function (state) {
          expect(state).to.have.ownProperty(propName);
          expect(state[propName]).to.be.a('number');
          expect(state[propName]).to.equal(0);
        });
        done();
      });

      it('should have <Number>min property', function (done) {
        var propName = 'min';
        var props$ = _rx.Observable.just({});
        var state$ = (0, _model2['default'])({ props$: props$ });
        state$.subscribe(function (state) {
          expect(state).to.have.ownProperty(propName);
          expect(state[propName]).to.be.a('number');
          expect(state[propName]).to.equal(0);
        });
        done();
      });

      it('should have <Number>max property', function (done) {
        var propName = 'max';
        var props$ = _rx.Observable.just({});
        var state$ = (0, _model2['default'])({ props$: props$ });
        state$.subscribe(function (state) {
          expect(state).to.have.ownProperty(propName);
          expect(state[propName]).to.be.a('number');
          expect(state[propName]).to.equal(100);
        });
        done();
      });

      it('should have <Number>step property', function (done) {
        var propName = 'step';
        var props$ = _rx.Observable.just({});
        var state$ = (0, _model2['default'])({ props$: props$ });
        state$.subscribe(function (state) {
          expect(state).to.have.ownProperty(propName);
          expect(state[propName]).to.be.a('number');
          expect(state[propName]).to.equal(1);
        });
        done();
      });

      it('should have <Number>ratio property', function (done) {
        var propName = 'ratio';
        var props$ = _rx.Observable.just({});
        var state$ = (0, _model2['default'])({ props$: props$ });
        state$.subscribe(function (state) {
          expect(state).to.have.ownProperty(propName);
          expect(state[propName]).to.be.a('number');
          expect(state[propName]).to.equal(0);
        });
        done();
      });

      it('should get data from <Observable>props$', function (done) {
        var props = {
          max: 11,
          min: 1,
          step: 2,
          value: 5
        };
        var props$ = _rx.Observable.just(props);
        var state$ = (0, _model2['default'])({ props$: props$ });
        state$.subscribe(function (state) {
          expect(state).to.deep.equal((0, _fastJs.assign)({}, props, { ratio: 40 }));
        });
        done();
      });
    });
  });
});