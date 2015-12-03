/**
 * @fileoverview Tests for RangeBehavior/clampedValue
 * @author Frederik Krautwald
 */

/* eslint max-nested-callbacks: 0, max-len: 0, no-unused-expressions: 0 */
/* global describe, it */

import chai from 'chai'
import clampedValue from './clampedValue'

const expect = chai.expect

describe(`RangeBehavior`, () => {
  describe(`clampedValue`, () => {
    it(`should be a function`, () => {
      expect(clampedValue).to.be.a(`function`)
    })

    it(`should return a <number>`, () => {
      const value = clampedValue({value: 0})
      expect(value).to.be.a(`number`)
    })
  })
})
