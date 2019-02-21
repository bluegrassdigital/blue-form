// setTimeout only to ensure the html has been injected in the docs already :)

setTimeout(function() {
  var el = document.querySelector('#Form')
  var printTo = document.querySelector('#originalValues')

  var form = new blueForm.Form(el, {
    onFieldUpdated: (field, event) => console.log(field.name, field.getValue()),
  })

  printTo.innerHTML = JSON.stringify(form.getFieldValues())

  setTimeout(function () {
    form.setFieldValues({
      "TextInput":"New value!",
      "EmailInput":"newemail@example.com",
      "NumberInput":"2",
      "ColorInput":"#886633",
      "TelInput":"+2799999999",
      "DateInput":"2017-10-17",
      "Select":"",
      "MultiSelect":["2"],
      "RadioInput":"No",
      "Checkboxes":["Apples"]
    })
  }, 5000)
},1000)
