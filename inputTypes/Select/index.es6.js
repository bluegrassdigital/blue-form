import { events, dom } from 'blue-js'

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
    this.options = this.select.querySelectorAll('option')

    events.listen(this.select, 'change', (event) => onChange(this, event))
  }
  getValue () {
    if (this.select.type === 'select-one') return this.select.value

    const selectedOptions = dom.filter(this.options, opt => opt.selected)

    return selectedOptions.map(opt => opt.value)
  }
  getSelectedOptionText () {
    return this.options[this.getSelectedIndex()].textContent
  }
  setValue (value, suppress) {
    if (this.select.type === 'select-one') {
      this.select.value = value
    } else {
      value = Array.isArray(value) ? value : [value]
      dom.each(this.options, option => {
        if (value.indexOf(option.value) !== -1) {
          option.selected = 'selected'
        } else {
          option.removeAttribute('selected')
        }
      })
    }
    if (!suppress) events.trigger(this.select, 'change')
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
    events.trigger(this.select, 'change')
  }
  /**
   * Get current options of the select
   * @returns {array} An array representing the current Select options
   */
  getSelectOptions () {
    let opts = []

    dom.each(this.options, (option) => {
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
    let options = firstOption ? [firstOption, ...newOptions] : newOptions

    this.suppressEvents = true
    this.select.length = 0

    options.forEach((option, i) => {
      this.select[i] = option.Value ? new window.Option(option.Text, option.Value) : new window.Option(option.Text)
    })

    if (persist && originalValue) this.setValue(originalValue)

    this.suppressEvents = false

    events.trigger(this.select, 'change')
  }
}

module.exports = Select
