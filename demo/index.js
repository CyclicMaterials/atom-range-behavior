import {run} from '@cycle/core'
import {makeDOMDriver} from '@cycle/dom'
import demo from './demo'

const main = demo

run(main, {
  DOM: makeDOMDriver(`.demo-container`),
})
