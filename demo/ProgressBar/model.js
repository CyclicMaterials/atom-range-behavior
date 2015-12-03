/**
 * @fileoverview Model for Demo ProgressBar Dataflow Component
 * @author Frederik Krautwald
 * @copyright 2015 Cyclic Materials. All rights reserved.
 */

import RangeBehavior from './../../src/RangeBehavior/index'

function model({props$, RangeBehaviorFunc = RangeBehavior}) {
  const rangeBehavior = RangeBehaviorFunc({props$})
  return rangeBehavior.state$.map(
    rangeBehaviorState => ({
      ratio: rangeBehaviorState.ratio,
      style: `width: ${rangeBehaviorState.ratio}%;`,
    })
  )
}

export default model
