# blue-form

<p>A class based form implementation for easily getting/setting form field values programmatically. Works seamlessly with <a href="https://github.com/bluegrassdigital/blue-widgets" target="_blank">blue-widgets</a> or standalone.</p>

Check out the [examples](https://bluegrassdigital.github.io/blue-form/#/page/docs/examples.md)

## Installation

This is a UMD module, so can be consumed any way you like

Install via npm `npm install blue-form --save`

Or include `blue-form.umd.js` from the `./dist` folder in your page

If you were previously using the UMD module, you'll also need to include the UMD version of blue-js before referencing blue-form

### CommonJS
```javascript
var Form = require('blue-form').Form

var form = new Form(el)

console.log(form.getFieldValues())
```

### ES2015 module
```javascript
import { Form } from 'blue-form'

const form = new Form(el)

console.log(form.getFieldValues())

// Set new values programmatically with a simple object of new name:value pairs. Multi selects and checkboxes accept arrays or strings
form.setFieldValues({
  "TextInput":"New value!",
  "EmailInput":"newemail@example.com",
  "ColorInput":"#886633",
  "TelInput":"+2799999999",
  "DateInput":"2017-10-17",
  "Select":"",
  "MultiSelect":["2"],
  "RadioInput":"No",
  "Checkboxes":["Apples"]
})

```

### Standalone

```html
<form id="Form">
  <input type="text" name="TextInput" value="Some value"><br>
  <input type="number" name="NumberInput" value="5"><br>
  <input type="email" name="EmailInput" value="me@example.com"><br>
  <input type="color" name="ColorInput" value="#454545"><br>
  <input type="tel" name="TelInput" value="+27217213456"><br>
  <input type="date" name="DateInput" value="2017-05-17"><br>
  <label for="Select">Select one</label><br>
  <select name="Select">
    <option value="">Please select</option>
    <option value="1" selected>Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </select><br>
  <label for="MultiSelect">Select multiple</label><br>
  <select name="MultiSelect" multiple>
    <option value="1" selected>Option 1</option>
    <option value="2">Option 2</option>
    <option value="3" selected>Option 3</option>
  </select><br>
  <fieldset>
    <legend>Radios</legend>
    <label>Yes<input type="radio" name="RadioInput" value="Yes" checked></label>
    <label><input type="radio" name="RadioInput" value="No">No</label>
  </fieldset>
  <fieldset>
    <legend>Checkboxes</legend>
    <label>Bananas<input type="checkbox" name="Checkboxes" value="Bananas" checked></label>
    <label>Apples<input type="checkbox" name="Checkboxes" value="Apples"></label>
    <label>Peaches<input type="checkbox" name="Checkboxes" value="Peaches"></label>
    <label>Pears<input type="checkbox" name="Checkboxes" value="Pears" checked></label>
  </fieldset>
</form>

<script src="blue-form.js"></script>
<script>
var el = document.querySelector('#Form')

var form = new blueForm.Form(el)

console.log(form.getFieldValues())
</script>
```
