/**
 * @fileoverview View for Demo ProgressBar Dataflow Component
 * @author Frederik Krautwald
 * @copyright 2015 Cyclic Materials. All rights reserved.
 */

import {div, span} from '@cycle/dom'

function view({state$}) {
  return state$.map(
    state =>
      div(`.ProgressBar`, [
        div(`.ProgressBar_progress`, {attributes: {style: state.style}}, [
          div(`.ProgressBar_progressValue`, [
            span(`${state.ratio}`),
            `%`,
          ]),
        ]),
      ])
  )
}

export default view
