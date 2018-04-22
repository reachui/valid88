class MaxLengthValidator extends BaseValidator {

  constructor() {
      super('maxlength');
  }

  validate(value, validCfg)  {
    console.log('in regex validator');
    // if ((validCfg.value === true) && ((value == null) || (value.trim().length === 0)))  {
    //     return false;
    // }

  }

}

new MaxLengthValidator();
