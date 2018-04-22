class DateValidator extends BaseValidator {

  constructor() {
      super('date');
  }

  validate(value, validCfg)  {
    console.log('in date validator');
    // if ((validCfg.value === true) && ((value == null) || (value.trim().length === 0)))  {
    //     return false;
    // }

  }

}

new DateValidator();
