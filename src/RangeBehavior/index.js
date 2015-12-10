/**
 * @fileoverview RangeBehavior dataflow component
 * @author Frederik Krautwald
 * @copyright 2015 Cyclic Materials. All rights reserved.
 */

import {Observable} from 'rx'
import clampedValue from './clampedValue'
import model from './model'
import ratioCalc from './ratioCalc'
import stepCalc from './stepCalc'

function RangeBehavior({props$ = Observable.just({})}) {
  const state$ = model({props$})
  return {
    clampedValue,
    ratioCalc,
    state$,
    stepCalc,
  }
}

export default RangeBehavior
