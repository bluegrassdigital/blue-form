import { createField } from '../utils'

class Input {
  constructor (el, onChange) {
    this.field = createField(el.name, onChange)
  }
  getValue () {
    return this.field.getValue()
  }
  setValue (value, suppress) {
    return this.field.setValue(value, suppress)
  }
}

export default Input
