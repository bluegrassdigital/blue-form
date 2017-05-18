// This is an entirely generated file, please do not modify it directly. Modify the source .es6.js file and run the gulp task'use strict';

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _blueJs = require('blue-js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Select = function () {
  function Select(els, name, onChange) {
    var _this = this;

    (0, _classCallCheck3.default)(this, Select);

    this.name = name;
    this.select = els[0];

    _blueJs.events.listen(this.select, 'change', function (event) {
      return onChange(_this, event);
    });
  }

  (0, _createClass3.default)(Select, [{
    key: 'getValue',
    value: function getValue() {
      if (this.select.type === 'select-one') return this.select.value;

      var options = this.select.querySelectorAll('option');

      var selectedOptions = _blueJs.dom.filter(options, function (opt) {
        return opt.selected;
      });

      return selectedOptions.map(function (opt) {
        return opt.value;
      });
    }
  }, {
    key: 'getSelectedOptionText',
    value: function getSelectedOptionText() {
      var options = this.select.querySelectorAll('option');
      return options[this.getSelectedIndex()].textContent;
    }
  }, {
    key: 'setValue',
    value: function setValue(value, suppress) {
      if (this.select.type === 'select-one') {
        this.select.value = value;
      } else {
        var options = this.select.querySelectorAll('option');
        value = Array.isArray(value) ? value : [value];
        _blueJs.dom.each(options, function (option) {
          if (value.indexOf(option.value) !== -1) {
            option.selected = 'selected';
          } else {
            option.removeAttribute('selected');
          }
        });
      }
      if (!suppress) _blueJs.events.trigger(this.select, 'change');
    }
  }, {
    key: 'getSelectedIndex',
    value: function getSelectedIndex() {
      return this.select.selectedIndex;
    }
  }, {
    key: 'setSelectIndex',
    value: function setSelectIndex(newIndex) {
      this.select.selectedIndex = newIndex;
      _blueJs.events.trigger(this.select, 'change');
    }
  }, {
    key: 'getSelectOptions',
    value: function getSelectOptions() {
      var options = this.select.querySelectorAll('option');
      var opts = [];

      _blueJs.dom.each(options, function (option) {
        var opt = {
          Text: option.textContent,
          Value: option.value || option.textContent
        };
        if (option.selected) opt.Selected = true;
        opts.push(opt);
      });

      return opts;
    }
  }, {
    key: 'changeSelectOptions',
    value: function changeSelectOptions(newOptions, persist, keepFirstOption) {
      var _this2 = this;

      var originalValue = this.getValue();
      var firstOption = keepFirstOption ? this.getSelectOptions()[0] : null;
      var options = firstOption ? [firstOption].concat(newOptions) : newOptions;

      this.suppressEvents = true;
      this.select.length = 0;

      options.forEach(function (option, i) {
        _this2.select[i] = option.Value ? new window.Option(option.Text, option.Value) : new window.Option(option.Text);
      });

      if (persist && originalValue) this.setValue(originalValue);

      this.suppressEvents = false;

      _blueJs.events.trigger(this.select, 'change');
    }
  }]);
  return Select;
}();

module.exports = Select;