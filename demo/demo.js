/**
 * @fileoverview Demo Main
 * @author Frederik Krautwald
 * @copyright 2015 Cyclic Materials. All rights reserved.
 */

import ProgressBar from './ProgressBar/index'
import {Observable} from 'rx'

function demo() {
  const progressBar = ProgressBar({
    props$: Observable.just({
      min: 0, max: 200, value: 120,
    }),
  })

  return {
    DOM: progressBar.DOM,
  }
}

export default demo
