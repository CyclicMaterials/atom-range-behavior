/**
 * @fileoverview Ratio calculation for RangeBehavior
 * @author Frederik Krautwald
 * @copyright 2015 Cyclic Materials. All rights reserved.
 */

import clampedValue from './clampedValue'

function ratioCalc({value, step, min, max}) {
  return (clampedValue({value, step, min, max}) - min) / (max - min)
}

export default ratioCalc
