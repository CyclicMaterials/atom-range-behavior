/**
 * @fileoverview API for atom-range-behavior
 * @author Frederik Krautwald
 * @copyright 2015 Cyclic Materials. All rights reserved.
 */

import RangeBehavior from './RangeBehavior/index'

export default {
  /**
   * `RangeBehavior` provides a the behavior for something with a minimum
   * to maximum range.
   *
   * ### Properties
   *
   * The following properties are available:
   *
   * Property | Description | Default
   * ---------|-------------|---------
   * `max` | `{Number}` The number that indicates the maximum value of the range. | `100`
   * `min` | `{Number}` The number that indicates the minimum value of the range. | `0`
   * `ratio` | `{Number}` **read-only** Returns the ratio of the value. | `0`
   * `step` | `{Number}` Specifies the value granularity of the range’s value. | `1`
   * `value` | `{Number}` The number that represents the current value. | `0`
   *
   * @param {Object} {props$} An optional specification of:
   *
   *     - *props$ :: Observable* An observable of object of properties.
   *
   * @return {Object} The RangeBehavior API. The object
   * has the following structure:
   *
   *     {
   *       <Function>clampedValue({<Number>value, <Number>step, <Number>min, <Number>max}),
   *       <Function>ratioCalc({<Number>value, <Number>step, <Number>min, <Number>max}),
   *       <Observable>state$,
   *       <Function>stepCalc({<Number>value, <Number>step, <Number>min})
   *     }
   *
   * @function RangeBehavior
   */
  RangeBehavior,
}
