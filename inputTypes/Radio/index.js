// This is an entirely generated file, please do not modify it directly. Modify the source .es6.js file and run the gulp task'use strict';

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _blueJs = require('blue-js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RadioInput = function () {
  function RadioInput(els, name, onChange) {
    var _this = this;

    (0, _classCallCheck3.default)(this, RadioInput);

    this.name = name;
    this.inputs = els;
    _blueJs.events.listenCollection(this.inputs, 'change', function (event) {
      return onChange(_this, event);
    });
  }

  (0, _createClass3.default)(RadioInput, [{
    key: 'getValue',
    value: function getValue() {
      var selectedItem = void 0;
      _blueJs.dom.each(this.inputs, function (input) {
        if (input.checked) selectedItem = input;
      });
      return selectedItem ? selectedItem.value : null;
    }
  }, {
    key: 'setValue',
    value: function setValue(value, suppress) {
      _blueJs.dom.each(this.inputs, function (input) {
        if (input.value === value) {
          input.checked = 'checked';
        } else {
          input.removeAttribute('checked');
        }
      });
      if (!suppress) _blueJs.events.trigger(this.inputs[0], 'change');
    }
  }]);
  return RadioInput;
}();

module.exports = RadioInput;