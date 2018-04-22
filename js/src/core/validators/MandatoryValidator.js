//import BaseValidator from './BaseValidator';

class MandatoryValidator extends BaseValidator {

  constructor() {
      super('mandatory');
  }

  validate(value, validCfg)  {
    console.log('here');
    if ((validCfg.value === true) && ((value == null) || (value.trim().length === 0)))  {
        return false;
    }

  }

}

new MandatoryValidator();
