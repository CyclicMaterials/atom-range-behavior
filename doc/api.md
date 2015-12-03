
# Cyclic Materials atom-range-behavior API

- [`RangeBehavior`](#RangeBehavior)

Author: Frederik Krautwald

- - -

### <a id="RangeBehavior"></a> `RangeBehavior({props$})`

`RangeBehavior` provides a the behavior for something with a minimum
to maximum range.

### Properties

The following properties are available:

Property | Description | Default
---------|-------------|---------
`max` | `{Number}` The number that indicates the maximum value of the range. | `100`
`min` | `{Number}` The number that indicates the minimum value of the range. | `0`
`ratio` | `{Number}` **read-only** Returns the ratio of the value. | `0`
`step` | `{Number}` Specifies the value granularity of the range’s value. | `1`
`value` | `{Number}` The number that represents the current value. | `0`

#### Arguments:

- `{props$} :: Object` A specification of: 
    - *props$ :: Observable* An observable of object of properties.

#### Return:

*(Object)* The RangeBehavior API. The object has the following structure:

    {
      <Function>clampedValue({<Number>value, <Number>step, <Number>min, <Number>max}),
      <Function>ratioCalc({<Number>value, <Number>step, <Number>min, <Number>max}),
      <Observable>state$,
      <Function>stepCalc({<Number>value, <Number>step, <Number>min})
    }

- - -

