
The values in this form should all be printed out to the div below, then 5 seconds later all the values will be changed programmatically

```javascript
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

<?codeembed seamless title="Result" size="ipad" base="docs/base.html" adjust-height use-html="form" scripts="../umd/blue-form.js,form.js"></codeembed?>

<?tabs>
<codeblock title="JS" lang="javascript" external="docs/form.js"></codeblock>
<codeblock title="HTML" lang="html" ref="form">
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
<p>Original field values</p>
<pre id="originalValues">
some text
some text
some text
some text
</pre>
</codeblock>
</tabs?>
