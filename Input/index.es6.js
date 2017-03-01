import { createField } from '../utils'

class Input {
  constructor (el, onChange) {
    this.field = createField(el.name, onChange)
  }
  getValue () {
    return this.field.getValue()
  }
  setValue () {
    return this.field.setValue()
  }
}

export default Input
