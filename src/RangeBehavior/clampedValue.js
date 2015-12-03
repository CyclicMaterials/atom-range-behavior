/**
 * @fileoverview Clamped value for RangeBehavior
 * @author Frederik Krautwald
 * @copyright 2015 Cyclic Materials. All rights reserved.
 */
import stepCalc from './stepCalc'

function clampedValue({value, step, min, max}) {
  return Math.min(max, Math.max(min, stepCalc({value, step, min})))
}

export default clampedValue
