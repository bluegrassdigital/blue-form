// This is an entirely generated file, please do not modify it directly. Modify the source .es6.js file and run the gulp task'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _from = require('babel-runtime/core-js/array/from');

var _from2 = _interopRequireDefault(_from);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Form = function () {
  function Form(el, opts) {
    (0, _classCallCheck3.default)(this, Form);

    this.el = el;
    this.fieldEls = (0, _from2.default)(el);
    this.fields = {};

    this.options = opts;

    this.onFieldUpdated = this.onFieldUpdated.bind(this);

    this._createFields();
  }

  (0, _createClass3.default)(Form, [{
    key: '_createFields',
    value: function _createFields() {
      var _this = this;

      this.fieldEls.forEach(function (el) {
        if (!_this.fields[el.name]) {
          var field = (0, _utils.createField)(el.name, _this.onFieldUpdated);
          if (field) _this.fields[el.name] = field;
        }
      });
    }
  }, {
    key: 'reset',
    value: function reset() {
      if (this.el.reset) this.el.reset();
    }
  }, {
    key: 'onFieldUpdated',
    value: function onFieldUpdated(field, event) {
      if (typeof this.options.onFieldUpdated === 'function') this.options.onFieldUpdated(field, event);
    }
  }, {
    key: 'setFieldValues',
    value: function setFieldValues(newValues) {
      var suppress = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      for (var field in this.fields) {
        if (newValues[field] && this.fields.hasOwnProperty(field)) {
          this.fields[field].setValue(newValues[field], suppress);
        }
      }
    }
  }, {
    key: 'getFieldValues',
    value: function getFieldValues() {
      var fieldValues = {};
      for (var field in this.fields) {
        if (field && this.fields.hasOwnProperty(field)) {
          fieldValues[field] = this.fields[field].getValue();
        }
      }
      return fieldValues;
    }
  }]);
  return Form;
}();

exports.default = Form;