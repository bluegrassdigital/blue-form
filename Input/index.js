// This is an entirely generated file, please do not modify it directly. Modify the source .es6.js file and run the gulp task'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Input = function () {
  function Input(el, onChange) {
    (0, _classCallCheck3.default)(this, Input);

    this.field = (0, _utils.createField)(el.name, onChange);
  }

  (0, _createClass3.default)(Input, [{
    key: 'getValue',
    value: function getValue() {
      return this.field.getValue();
    }
  }, {
    key: 'setValue',
    value: function setValue(value, suppress) {
      return this.field.setValue(value, suppress);
    }
  }]);
  return Input;
}();

exports.default = Input;