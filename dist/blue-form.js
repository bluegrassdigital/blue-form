var e=require("blue-js"),t=function(t,n,i){var s=this;this.name=n,this.inputs=t,e.listenCollection(this.inputs,"change",function(e){return i(s,e)})};t.prototype.getValue=function(){if(1===this.inputs.length)return this.inputs[0].value||"on";var t=[];return e.each(this.inputs,function(e){e.checked&&t.push(e.value||"on")}),0===t.length?null:t},t.prototype.setValue=function(t,n){t=Array.isArray(t)?t:[t],e.each(this.inputs,function(e){e.checked=-1!==t.indexOf(e.value)}),n||e.trigger(this.inputs[0],"change")};var n=function(t,n,i){var s=this;this.name=n,this.inputs=t,e.listenCollection(this.inputs,"change",function(e){return i(s,e)})};n.prototype.getValue=function(){var t;return e.each(this.inputs,function(e){e.checked&&(t=e)}),t?t.value:null},n.prototype.setValue=function(t,n){e.each(this.inputs,function(e){e.checked=e.value===t}),n||e.trigger(this.inputs[0],"change")};var i=function(t,n,i){var s=this;this.name=n,this.select=t[0],e.listen(this.select,"change",function(e){return i(s,e)})};i.prototype.getValue=function(){if("select-one"===this.select.type)return this.select.value;var t=this.select.querySelectorAll("option");return e.filter(t,function(e){return e.selected}).map(function(e){return e.value})},i.prototype.getSelectedOptionText=function(){return this.select.querySelectorAll("option")[this.getSelectedIndex()].textContent},i.prototype.setValue=function(t,n){if("select-one"===this.select.type)this.select.value=t;else{var i=this.select.querySelectorAll("option");t=Array.isArray(t)?t:[t],e.each(i,function(e){-1!==t.indexOf(e.value)?e.selected="selected":e.removeAttribute("selected")})}n||e.trigger(this.select,"change")},i.prototype.getSelectedIndex=function(){return this.select.selectedIndex},i.prototype.setSelectIndex=function(t){this.select.selectedIndex=t,e.trigger(this.select,"change")},i.prototype.getSelectOptions=function(){var t=this.select.querySelectorAll("option"),n=[];return e.each(t,function(e){var t={Text:e.textContent,Value:e.value||e.textContent};e.selected&&(t.Selected=!0),n.push(t)}),n},i.prototype.changeSelectOptions=function(t,n,i){var s=this,r=this.getValue(),o=i?this.getSelectOptions()[0]:null,a=o?[o].concat(t):t;this.suppressEvents=!0,this.select.length=0,a.forEach(function(e,t){s.select[t]=e.Value?new window.Option(e.Text,e.Value):new window.Option(e.Text)}),n&&r&&this.setValue(r),this.suppressEvents=!1,e.trigger(this.select,"change")};var s=function(t,n,i){var s=this;this.name=n,this.textarea=t[0],e.listen(this.textarea,"input change",function(e){return i(s,e)})};s.prototype.getValue=function(){return this.textarea.value},s.prototype.setValue=function(t,n){this.textarea.value=t,n||e.trigger(this.textarea,"change")};var r=function(t,n,i){var s=this;this.name=n,this.input=t[0],e.listen(this.input,"input change",function(e){return i(s,e)})};function o(e,o){if(""===e)return!1;var a=document.querySelectorAll("[name="+e+"]"),l=function(e){switch(e){case"select-one":case"select-multiple":return i;case"radio":return n;case"checkbox":return t;case"textarea":return s;case"text":case"email":case"password":case"search":case"tel":case"url":case"number":case"color":case"range":case"hidden":case"date":case"month":case"week":case"datetime":return r}}(a[0].type);return l?new l(a,e,o):void 0}r.prototype.getValue=function(){return this.input.value},r.prototype.setValue=function(t,n){this.input.value=t,n||e.trigger(this.input,"change")};var a=function(e,t){this.field=o(e.name,t)};a.prototype.getValue=function(){return this.field.getValue()},a.prototype.setValue=function(e,t){return this.field.setValue(e,t)};var l=function(e,t){this.el=e,this.fields={},this.options=t||{},this.onFieldUpdated=this.onFieldUpdated.bind(this),this.createFields()};l.prototype.createFields=function(){this.fieldEls=this.el.querySelectorAll("input[name], select[name], textarea[name]");for(var e=0;e<this.fieldEls.length;e++){var t=this.fieldEls[e];if(!this.fields[t.name]){var n=o(t.name,this.onFieldUpdated);n&&(this.fields[t.name]=n)}}},l.prototype.reset=function(){this.el.reset&&this.el.reset()},l.prototype.onFieldUpdated=function(e,t){"function"==typeof this.options.onFieldUpdated&&this.options.onFieldUpdated(e,t)},l.prototype.setFieldValues=function(e,t){for(var n in void 0===t&&(t=!1),this.createFields(),this.fields)e[n]&&this.fields.hasOwnProperty(n)&&this.fields[n].setValue(e[n],t)},l.prototype.getFieldValues=function(){this.createFields();var e={};for(var t in this.fields)t&&this.fields.hasOwnProperty(t)&&(e[t]=this.fields[t].getValue());return e},exports.Input=a,exports.Form=l;
//# sourceMappingURL=blue-form.js.map
