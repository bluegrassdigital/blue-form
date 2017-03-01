// This is an entirely generated file, please do not modify it directly. Modify the source .es6.js file and run the gulp task'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTypeClass = getTypeClass;
exports.createField = createField;

var _inputTypes = require('../inputTypes');

function getTypeClass(fieldType) {
  switch (fieldType) {
    case 'select-one':
    case 'select-multiple':
      return _inputTypes.Select;
    case 'radio':
      return _inputTypes.Radio;
    case 'checkbox':
      return _inputTypes.Checkbox;
    case 'textarea':
      return _inputTypes.Textarea;
    case 'text':
    case 'email':
    case 'password':
    case 'search':
    case 'tel':
    case 'url':
    case 'color':
    case 'range':
    case 'hidden':
    case 'date':
    case 'month':
    case 'week':
    case 'datetime':
      return _inputTypes.TextInput;
  }
}

function createField(name, onValueChange) {
  if (name === '') return false;
  var matchedFields = document.querySelectorAll('[name=' + name + ']');
  var TypeClass = getTypeClass(matchedFields[0].type);
  if (TypeClass) return new TypeClass(matchedFields, name, onValueChange);
}