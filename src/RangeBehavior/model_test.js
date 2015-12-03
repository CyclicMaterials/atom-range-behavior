/**
 * @fileoverview Tests for RangeBehavior/model
 * @author Frederik Krautwald
 */

/* eslint max-nested-callbacks: 0, max-len: 0, no-unused-expressions: 0 */
/* global describe, it */

import chai from 'chai'
import model from './model'
import {assign} from 'fast.js'
import {Observable} from 'rx'

const expect = chai.expect

describe(`RangeBehavior`, () => {
  describe(`model`, () => {
    it(`should be a function`, () => {
      expect(model).to.be.a(`function`)
    })

    it(`should output an Observable<Object>`, (done) => {
      const props$ = Observable.just({})
      const state$ = model({props$})
      expect(state$).to.respondTo(`subscribe`)
      state$.subscribe(state => {
        expect(state).to.be.an(`object`)
        done()
      })
    })

    describe(`state-object`, () => {
      it(`should have <Number>value property`, (done) => {
        const propName = `value`
        const props$ = Observable.just({})
        const state$ = model({props$})
        state$.subscribe(state => {
          expect(state).to.have.ownProperty(propName)
          expect(state[propName]).to.be.a(`number`)
          expect(state[propName]).to.equal(0)
        })
        done()
      })

      it(`should have <Number>min property`, (done) => {
        const propName = `min`
        const props$ = Observable.just({})
        const state$ = model({props$})
        state$.subscribe(state => {
          expect(state).to.have.ownProperty(propName)
          expect(state[propName]).to.be.a(`number`)
          expect(state[propName]).to.equal(0)
        })
        done()
      })

      it(`should have <Number>max property`, (done) => {
        const propName = `max`
        const props$ = Observable.just({})
        const state$ = model({props$})
        state$.subscribe(state => {
          expect(state).to.have.ownProperty(propName)
          expect(state[propName]).to.be.a(`number`)
          expect(state[propName]).to.equal(100)
        })
        done()
      })

      it(`should have <Number>step property`, (done) => {
        const propName = `step`
        const props$ = Observable.just({})
        const state$ = model({props$})
        state$.subscribe(state => {
          expect(state).to.have.ownProperty(propName)
          expect(state[propName]).to.be.a(`number`)
          expect(state[propName]).to.equal(1)
        })
        done()
      })

      it(`should have <Number>ratio property`, (done) => {
        const propName = `ratio`
        const props$ = Observable.just({})
        const state$ = model({props$})
        state$.subscribe(state => {
          expect(state).to.have.ownProperty(propName)
          expect(state[propName]).to.be.a(`number`)
          expect(state[propName]).to.equal(0)
        })
        done()
      })

      it(`should get data from <Observable>props$`, (done) => {
        const props = {
          max: 11,
          min: 1,
          step: 2,
          value: 5,
        }
        const props$ = Observable.just(props)
        const state$ = model({props$})
        state$.subscribe(state => {
          expect(state).to.deep.equal(assign({}, props, {ratio: 40}))
        })
        done()
      })
    })
  })
})
