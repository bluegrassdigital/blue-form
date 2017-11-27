import { listenCollection, trigger } from 'blue-js/events'
import { each } from 'blue-js/dom'

/**
 * RadioInput widget
 * @class
 * @private
 * @param {object} el The dom node to instantiate this class using
 * @param {string} fieldType The field type
 */
class Radio {
  constructor (els, name, onChange) {
    this.name = name
    this.inputs = els
    listenCollection(this.inputs, 'change', event => onChange(this, event))
  }
  getValue () {
    let selectedItem
    each(this.inputs, (input) => {
      if (input.checked) selectedItem = input
    })
    return selectedItem ? selectedItem.value : null
  }
  setValue (value, suppress) {
    each(this.inputs, (input) => {
      if (input.value === value) {
        input.checked = true
      } else {
        input.checked = false
      }
    })
    if (!suppress) trigger(this.inputs[0], 'change')
  }
}

export default Radio
