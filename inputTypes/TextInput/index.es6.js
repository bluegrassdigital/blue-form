import { events } from 'blue-js'

/**
 * TextInput widget
 * @class
 * @private
 * @param {object} el The dom node to instantiate this class using
 * @param {string} fieldType The field type
 */
class TextInput {
  constructor (els, name, onChange) {
    this.name = name
    this.input = els[0]
    events.listen(this.input, 'input change', (event) => onChange(this, event))
  }
  getValue () {
    return this.input.value
  }
  setValue (value, suppress) {
    this.input.value = value
    if (!suppress) events.trigger(this.input, 'change')
  }
}

module.exports = TextInput
