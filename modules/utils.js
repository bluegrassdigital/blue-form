import { Checkbox, Radio, Select, Textarea, TextInput } from './inputTypes'

export function getTypeClass (fieldType) {
  switch (fieldType) {
    case 'select-one':
    case 'select-multiple':
      return Select
    case 'radio':
      return Radio
    case 'checkbox':
      return Checkbox
    case 'textarea':
      return Textarea
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
      return TextInput
  }
}

export function createField (name, onValueChange) {
  if (name === '') return false
  const matchedFields = document.querySelectorAll(`[name=${name}]`)
  const TypeClass = getTypeClass(matchedFields[0].type)
  if (TypeClass) return new TypeClass(matchedFields, name, onValueChange)
}
