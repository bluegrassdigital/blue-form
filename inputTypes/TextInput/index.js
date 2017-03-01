// This is an entirely generated file, please do not modify it directly. Modify the source .es6.js file and run the gulp task'use strict';

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _blueJs = require('blue-js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextInput = function () {
  function TextInput(els, name, onChange) {
    var _this = this;

    (0, _classCallCheck3.default)(this, TextInput);

    this.name = name;
    this.input = els[0];
    _blueJs.events.listen(this.input, 'input change', function (event) {
      return onChange(_this, event);
    });
  }

  (0, _createClass3.default)(TextInput, [{
    key: 'getValue',
    value: function getValue() {
      return this.input.value;
    }
  }, {
    key: 'setValue',
    value: function setValue(value, suppress) {
      this.input.value = value;
      if (!suppress) _blueJs.events.trigger(this.input, 'change');
    }
  }]);
  return TextInput;
}();

module.exports = TextInput;