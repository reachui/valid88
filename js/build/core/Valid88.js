'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import MandatoryValidator from './validators/MandatoryValidator';

var Valid88Def = function () {
  function Valid88Def() {
    _classCallCheck(this, Valid88Def);

    this.validators = [];
    this.validationDef = null;
  }

  _createClass(Valid88Def, [{
    key: 'registerValidator',
    value: function registerValidator(validator) {
      this.validators[validator.name] = validator;
    }
  }, {
    key: 'registerValidationSet',
    value: function registerValidationSet(validationSet) {
      this.validationDef = validationSet;
    }
  }, {
    key: 'validateInput',
    value: function validateInput(setname, payload) {

      var validationSet = this.getValidationSet(setname);

      for (var i = 0; i < validationSet.fields.length; i++) {

        var fld = validationSet.fields[i];
        var fieldItems = fld.field.split('.');

        var fieldValue = this.getObjectField(payload, fieldItems);
        console.log(fieldValue);

        for (var iVal = 0; iVal < fld.validations.length; iVal++) {
          if (fld.validations[iVal].composite) {

            this.doCompositeValidation(fld.validations[iVal], fieldValue);
            // this.validationDef.compositevalidations
            // var compValidations = this.validationDef.compositevalidations;
            //  fld.validations[iVal];
          } else {
            var validator = this.validators[fld.validations[iVal].name];
            this.doValidation(validator, fieldValue, fld.validations[iVal]);
            // var result = validator.validate(fieldValue, fld.validations[iVal]);
            // if (result === false) {
            //   console.log('error in validation :' + fld.validations[iVal].name + " for value :" + value);
            // }
          }
        }
      }
    }
  }, {
    key: 'doCompositeValidation',
    value: function doCompositeValidation(composite, fieldValue) {

      var compValidations = this.getCompositeValidation(composite.name);

      for (var i = 0; i < compValidations.validations.length; i++) {
        var validator = this.validators[compValidations.validations[i].name];
        this.doValidation(validator, fieldValue, compValidations.validations[i]);
      }
    }
  }, {
    key: 'getCompositeValidation',
    value: function getCompositeValidation(name) {
      for (var i = 0; i < this.validationDef.compositevalidations.length; i++) {
        if (this.validationDef.compositevalidations[i].name === name) {
          return this.validationDef.compositevalidations[i];
        }
      }
    }
  }, {
    key: 'doValidation',
    value: function doValidation(validator, fieldValue, validCfg) {
      var result = validator.validate(fieldValue, validCfg);
      if (result === false) {
        console.log('error in validation :' + validCfg.name + " for value :" + value);
      }
    }
  }, {
    key: 'getValidator',
    value: function getValidator(type) {}
  }, {
    key: 'getObjectField',
    value: function getObjectField(obj, fields) {

      var ret = obj;

      for (var i = 0; i < fields.length; i++) {
        ret = ret[fields[i]];
      }

      return ret;
    }
  }, {
    key: 'getValidationSet',
    value: function getValidationSet(name) {
      for (var i = 0; i < this.validationDef.validationsets.length; i++) {
        if (this.validationDef.validationsets[i].name == name) {
          return this.validationDef.validationsets[i];
        }
      }
    }
  }]);

  return Valid88Def;
}();

var Valid88 = new Valid88Def();
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseValidator = function () {
  function BaseValidator(name) {
    _classCallCheck(this, BaseValidator);

    this.name = name;
    Valid88.registerValidator(this);
  }

  _createClass(BaseValidator, [{
    key: "validate",
    value: function validate(value, validCfg) {}
  }]);

  return BaseValidator;
}();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DateValidator = function (_BaseValidator) {
  _inherits(DateValidator, _BaseValidator);

  function DateValidator() {
    _classCallCheck(this, DateValidator);

    return _possibleConstructorReturn(this, (DateValidator.__proto__ || Object.getPrototypeOf(DateValidator)).call(this, 'date'));
  }

  _createClass(DateValidator, [{
    key: 'validate',
    value: function validate(value, validCfg) {
      console.log('in date validator');
      // if ((validCfg.value === true) && ((value == null) || (value.trim().length === 0)))  {
      //     return false;
      // }
    }
  }]);

  return DateValidator;
}(BaseValidator);

new DateValidator();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import BaseValidator from './BaseValidator';

var MandatoryValidator = function (_BaseValidator) {
  _inherits(MandatoryValidator, _BaseValidator);

  function MandatoryValidator() {
    _classCallCheck(this, MandatoryValidator);

    return _possibleConstructorReturn(this, (MandatoryValidator.__proto__ || Object.getPrototypeOf(MandatoryValidator)).call(this, 'mandatory'));
  }

  _createClass(MandatoryValidator, [{
    key: 'validate',
    value: function validate(value, validCfg) {
      console.log('here');
      if (validCfg.value === true && (value == null || value.trim().length === 0)) {
        return false;
      }
    }
  }]);

  return MandatoryValidator;
}(BaseValidator);

new MandatoryValidator();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MaxLengthValidator = function (_BaseValidator) {
  _inherits(MaxLengthValidator, _BaseValidator);

  function MaxLengthValidator() {
    _classCallCheck(this, MaxLengthValidator);

    return _possibleConstructorReturn(this, (MaxLengthValidator.__proto__ || Object.getPrototypeOf(MaxLengthValidator)).call(this, 'maxlength'));
  }

  _createClass(MaxLengthValidator, [{
    key: 'validate',
    value: function validate(value, validCfg) {
      console.log('in regex validator');
      // if ((validCfg.value === true) && ((value == null) || (value.trim().length === 0)))  {
      //     return false;
      // }
    }
  }]);

  return MaxLengthValidator;
}(BaseValidator);

new MaxLengthValidator();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RegExValidator = function (_BaseValidator) {
  _inherits(RegExValidator, _BaseValidator);

  function RegExValidator() {
    _classCallCheck(this, RegExValidator);

    return _possibleConstructorReturn(this, (RegExValidator.__proto__ || Object.getPrototypeOf(RegExValidator)).call(this, 'regex'));
  }

  _createClass(RegExValidator, [{
    key: 'validate',
    value: function validate(value, validCfg) {
      console.log('in regex validator');
      // if ((validCfg.value === true) && ((value == null) || (value.trim().length === 0)))  {
      //     return false;
      // }
    }
  }]);

  return RegExValidator;
}(BaseValidator);

new RegExValidator();