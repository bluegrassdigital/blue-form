import { filter, each, listen, trigger } from 'blue-js'

/**
 * Select widget
 * @class
 * @private
 * @param {object} el The dom node to instantiate this class using
 * @param {string} fieldType The field type
 */
class Select {
  constructor (els, name, onChange) {
    this.name = name
    this.select = els[0]

    listen(this.select, 'change', event => onChange(this, event))
  }
  getValue () {
    if (this.select.type === 'select-one') return this.select.value

    var options = this.select.querySelectorAll('option')

    const selectedOptions = filter(options, opt => opt.selected)

    return selectedOptions.map(opt => opt.value)
  }
  getSelectedOptionText () {
    var options = this.select.querySelectorAll('option')
    return options[this.getSelectedIndex()].textContent
  }
  setValue (value, suppress) {
    if (this.select.type === 'select-one') {
      this.select.value = value
    } else {
      var options = this.select.querySelectorAll('option')
      value = Array.isArray(value) ? value : [value]
      each(options, option => {
        if (value.indexOf(option.value) !== -1) {
          option.selected = 'selected'
        } else {
          option.removeAttribute('selected')
        }
      })
    }
    if (!suppress) trigger(this.select, 'change')
  }
  /**
   * Get index of selected option
   * @returns {number} The index of the selected option (or -1)
   */
  getSelectedIndex () {
    return this.select.selectedIndex
  }
  /**
   * Set index of selected option
   * @param {number} newIndex The index to set as selected
   */
  setSelectIndex (newIndex) {
    this.select.selectedIndex = newIndex
    trigger(this.select, 'change')
  }
  /**
   * Get current options of the select
   * @returns {array} An array representing the current Select options
   */
  getSelectOptions () {
    var options = this.select.querySelectorAll('option')
    let opts = []

    each(options, (option) => {
      let opt = {
        Text: option.textContent,
        Value: option.value || option.textContent
      }
      if (option.selected) opt.Selected = true
      opts.push(opt)
    })

    return opts
  }
  /**
   * Replace the options of a select element
   * @param {Object[]} newOptions - An array of objects for each new select option
   * @param {string} newOptions[].Text - The text value of the new select option.
   * @param {string|number} newOptions[].Value - The value of the new select option.
   * @param {bool} [newOptions[].Selected] - Whether or not this option is selected.
   * @param {bool} persist - Whether or not to persist the select at whatever it's value was prior to the change.
   * @param {bool} keepFirstOption - Whether or not to keep the existing first option. Useful if the firt option is a default eg. 'Please select'.
   */
  changeSelectOptions (newOptions, persist, keepFirstOption) {
    let originalValue = this.getValue()
    let firstOption = keepFirstOption ? this.getSelectOptions()[0] : null
    let options = firstOption ? [firstOption].concat(newOptions) : newOptions

    this.suppressEvents = true
    this.select.length = 0

    options.forEach((option, i) => {
      this.select[i] = option.Value ? new window.Option(option.Text, option.Value) : new window.Option(option.Text)
    })

    if (persist && originalValue) this.setValue(originalValue)

    this.suppressEvents = false

    trigger(this.select, 'change')
  }
}

export default Select
