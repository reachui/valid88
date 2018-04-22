// import MandatoryValidator from './validators/MandatoryValidator';

class Valid88Def  {

  constructor() {
    this.validators = [];
    this.validationDef = null;
  }

  registerValidator(validator) {
    this.validators[validator.name] = validator;
  }

  registerValidationSet(validationSet) {
    this.validationDef = validationSet;
  }

  validateInput(setname, payload) {

    var validationSet = this.getValidationSet(setname);

    for (var i = 0; i < validationSet.fields.length; i++) {

      var fld = validationSet.fields[i];
      var fieldItems = fld.field.split('.');

      var fieldValue = this.getObjectField(payload, fieldItems);
      console.log(fieldValue);

      for (var iVal = 0; iVal < fld.validations.length; iVal++) {

        if (fld.validations[iVal].composite) {

          this.doCompositeValidation(fld.validations[iVal], fieldValue);

        } else {

          var validator = this.validators[fld.validations[iVal].name];
          this.doValidation(validator, fieldValue, fld.validations[iVal]);

        }

      }

    }

  }

  doCompositeValidation(composite, fieldValue) {

    var compValidations = this.getCompositeValidation(composite.name);

    for (var i = 0; i < compValidations.validations.length; i++)  {
      var validator = this.validators[compValidations.validations[i].name];
      this.doValidation(validator, fieldValue, compValidations.validations[i]);
    }

  }

  getCompositeValidation(name)  {
    for (var i = 0; i < this.validationDef.compositevalidations.length; i++) {
      if (this.validationDef.compositevalidations[i].name === name) {
        return this.validationDef.compositevalidations[i];
      }
    }
  }

  doValidation(validator, fieldValue, validCfg)  {
    var result = validator.validate(fieldValue, validCfg);
    if (result === false) {
      console.log('error in validation :' + validCfg.name + " for value :" + value);
    }
  }

  getValidator(type)  {

  }

  getObjectField(obj, fields) {

    var ret = obj;

    for (var i = 0; i < fields.length; i++) {
      ret = ret[fields[i]];
    }

    return ret;

  }

  getValidationSet(name)  {
    for (var i = 0; i < this.validationDef.validationsets.length; i++) {
      if (this.validationDef.validationsets[i].name == name)  {
        return this.validationDef.validationsets[i];
      }
    }
  }

}

var Valid88 = new Valid88Def();
