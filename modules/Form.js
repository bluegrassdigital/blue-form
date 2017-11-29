import { createField } from './utils'

class Form {
  constructor (el, opts) {
    this.el = el
    this.fieldEls = el.querySelectorAll('input[name], select[name], textarea[name]')
    this.fields = {}

    this.options = opts || {}

    this.onFieldUpdated = this.onFieldUpdated.bind(this)

    this.createFields()
  }
  createFields () {
    for (let i = 0; i < this.fieldEls.length; i++) {
      const el = this.fieldEls[i]
      if (!this.fields[el.name]) {
        const field = createField(el.name, this.onFieldUpdated)
        if (field) this.fields[el.name] = field
      }
    }
  }
  /**
   * Programmatically reset the form to its original state
   */
  reset () {
    if (this.el.reset) this.el.reset()
  }
  onFieldUpdated (field, event) {
    if (typeof this.options.onFieldUpdated === 'function') this.options.onFieldUpdated(field, event)
  }
  /**
   * Set values of the forms fields to the new values
   * @param {Object} newValues - An object of key value pairs corresponding to field names and values to update.
   */
  setFieldValues (newValues, suppress = false) {
    for (let field in this.fields) {
      if (newValues[field] && this.fields.hasOwnProperty(field)) {
        this.fields[field].setValue(newValues[field], suppress)
      }
    }
  }
  /**
   * Get values of all child fields
   * @returns {Object} An object of key value pairs of form field values
   */
  getFieldValues () {
    let fieldValues = {}
    for (let field in this.fields) {
      if (field && this.fields.hasOwnProperty(field)) {
        fieldValues[field] = this.fields[field].getValue()
      }
    }
    return fieldValues
  }
}

export default Form
