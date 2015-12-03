/**
 * @fileoverview Tests for RangeBehavior/ratioCalc
 * @author Frederik Krautwald
 */

/* eslint max-nested-callbacks: 0, max-len: 0, no-unused-expressions: 0 */
/* global describe, it */

import chai from 'chai'
import ratioCalc from './ratioCalc'

const expect = chai.expect

describe(`RangeBehavior`, () => {
  describe(`ratioCalc`, () => {
    it(`should be a function`, () => {
      expect(ratioCalc).to.be.a(`function`)
    })

    it(`should return a <number>`, () => {
      let ratio = ratioCalc({value: 5, step: 2, min: 3, max: 45})
      expect(ratio).to.be.a(`number`)
      expect(ratio).to.equal(0.047619047619047616)

      ratio = ratioCalc({value: 5, step: 2, min: 1, max: 11})
      expect(ratio).to.equal(0.4)
    })
  })
})
