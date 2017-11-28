import { dom, events } from 'blue-js'

/**
 * CheckboxInput widget
 * @class
 * @private
 * @param {object} el The dom node to instantiate this class using
 * @param {string} fieldType The field type
 */
class Checkbox {
  constructor (els, name, onChange) {
    this.name = name
    this.inputs = els
    events.listenCollection(this.inputs, 'change', (event) => onChange(this, event))
  }
  getValue () {
    if (this.inputs.length === 1) return this.inputs[0].value || 'on'
    let val = []
    dom.each(this.inputs, (input) => {
      if (input.checked) val.push(input.value || 'on')
    })
    return val.length === 0 ? null : val
  }
  setValue (value, suppress) {
    value = Array.isArray(value) ? value : [value]
    dom.each(this.inputs, input => {
      if (value.indexOf(input.value) !== -1) {
        input.checked = true
      } else {
        input.checked = false
      }
    })
    if (!suppress) events.trigger(this.inputs[0], 'change')
  }
}

export default Checkbox
