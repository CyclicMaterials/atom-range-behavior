/**
 * @fileoverview Model for RangeBehavior
 * @author Frederik Krautwald
 * @copyright 2015 Cyclic Materials. All rights reserved.
 */

import {Observable} from 'rx'
import ratioCalc from './ratioCalc'

function model({props$ = Observable.just({})}) {
  return props$.map(({max = 100, min = 0, step = 1, value = 0}) => {
    const ratio = ratioCalc({value, step, min, max}) * 100
    return {max, min, ratio, step, value}
  })
}

export default model
