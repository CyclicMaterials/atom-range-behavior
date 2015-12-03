/**
 * @fileoverview Demo ProgressBar Dataflow Component
 * @author Frederik Krautwald
 * @copyright 2015 Cyclic Materials. All rights reserved.
 */

import RangeBehavior from './../../src/RangeBehavior/index'
import model from './model'
import view from './view'

function ProgressBar({props$, RangeBehaviorFunc = RangeBehavior}) {
  const state$ = model({props$, RangeBehaviorFunc})
  return {
    DOM: view({state$}),
  }
}

export default ProgressBar
