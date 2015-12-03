/**
 * @fileoverview Step calculation for RangeBehavior
 * @author Frederik Krautwald
 * @copyright 2015 Cyclic Materials. All rights reserved.
 */

function stepCalc({value, step, min}) {
  // If we calculate the step using `Math.round(parsedValue / step) * step`,
  // we may hit a precision point issue,
  // e.g., 0.1 * 0.2 = 0.020000000000000004
  // http://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html
  //
  // As a workaround,we can divide by the reciprocal of `step`.
  const parsedValue = parseFloat(value)
  return step ?
    (Math.round((parsedValue + min) / step) - min / step) / (1 / step) :
    parsedValue
}

export default stepCalc
