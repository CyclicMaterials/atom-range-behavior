/**
 * @fileoverview Tests for RangeBehavior/stepCalc
 * @author Frederik Krautwald
 */

/* eslint max-nested-callbacks: 0, max-len: 0, no-unused-expressions: 0 */
/* global describe, it */

import chai from 'chai'
import stepCalc from './stepCalc'

const expect = chai.expect

describe(`RangeBehavior`, () => {
  describe(`stepCalc`, () => {
    it(`should be a function`, () => {
      expect(stepCalc).to.be.a(`function`)
    })

    it(`should return a <number>`, () => {
      const step = stepCalc({value: 0})
      expect(step).to.be.a(`number`)
    })
  })
})
