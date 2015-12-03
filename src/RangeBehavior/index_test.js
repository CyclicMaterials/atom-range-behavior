/**
 * @fileoverview Tests for RangeBehavior
 * @author Frederik Krautwald
 */

/* eslint max-nested-callbacks: 0, max-len: 0, no-unused-expressions: 0 */
/* global describe, it */

import chai from 'chai'
import model from './model'
import RangeBehavior from './index'
import {Observable} from 'rx'

const expect = chai.expect

describe(`RangeBehavior`, () => {
  it(`should be a function`, () => {
    expect(RangeBehavior).to.be.a(`function`)
  })

  it(`should output a sinks-object`, () => {
    const rangeBehavior = RangeBehavior({props$: Observable.just({})})
    expect(rangeBehavior).to.be.an(`object`)
  })

  describe(`sinks`, () => {
    describe(`state$ sink`, () => {
      it(`should be an Observable<object>`, (done) => {
        const {state$} = RangeBehavior({props$: Observable.just({})})
        expect(state$).to.respondTo(`subscribe`)
        state$.subscribe(state => {
          expect(state).to.be.an(`object`)
          done()
        })
      })

      it(`should output model`, (done) => {
        const props = {
          max: 11,
          min: 1,
          step: 2,
          value: 5,
        }
        const props$ = Observable.just(props)
        const {state$} = RangeBehavior({props$})
        const modelState$ = model({props$})
        modelState$.combineLatest(
          state$,
          (modelState, state) => ({modelState, state})
        ).subscribe(states => {
          expect(states.state).to.deep.equal(states.modelState)
        })
        done()
      })
    })

    describe(`ratioCalc`, () => {
      it(`should be a function`, () => {
        const {ratioCalc} = RangeBehavior({props$: Observable.just({})})
        expect(ratioCalc).to.be.a(`function`)
      })
    })

    describe(`clampedValue`, () => {
      it(`should be a function`, () => {
        const {clampedValue} = RangeBehavior({props$: Observable.just({})})
        expect(clampedValue).to.be.a(`function`)
      })
    })

    describe(`stepCalc`, () => {
      it(`should be a function`, () => {
        const {stepCalc} = RangeBehavior({props$: Observable.just({})})
        expect(stepCalc).to.be.a(`function`)
      })
    })
  })
})
