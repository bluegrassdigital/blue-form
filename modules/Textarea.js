import { listen, trigger } from 'blue-js'

/**
 * Textarea widget
 * @class
 * @private
 * @param {object} el The dom node to instantiate this class using
 * @param {string} fieldType The field type
 */
class Textarea {
  constructor (els, name, onChange) {
    this.name = name
    this.textarea = els[0]
    listen(this.textarea, 'input change', (event) => onChange(this, event))
  }
  getValue () {
    return this.textarea.value
  }
  setValue (value, suppress) {
    this.textarea.value = value
    if (!suppress) trigger(this.textarea, 'change')
  }
}

export default Textarea
