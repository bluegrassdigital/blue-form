import { events, dom } from 'blue-js'

/**
 * RadioInput widget
 * @class
 * @private
 * @param {object} el The dom node to instantiate this class using
 * @param {string} fieldType The field type
 */
class RadioInput {
  constructor (els, name, onChange) {
    this.name = name
    this.inputs = els
    events.listenCollection(this.inputs, 'change', (event) => onChange(this, event))
  }
  getValue () {
    let selectedItem
    dom.each(this.inputs, (input) => {
      if (input.checked) selectedItem = input
    })
    return selectedItem ? selectedItem.value : null
  }
  setValue (value, suppress) {
    dom.each(this.inputs, (input) => {
      if (input.value === value) {
        input.checked = 'checked'
      } else {
        input.removeAttribute('checked')
      }
    })
    if (!suppress) events.trigger(this.inputs[0], 'change')
  }
}

module.exports = RadioInput
