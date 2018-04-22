class BaseValidator {

  constructor(name) {
      this.name = name;
      Valid88.registerValidator(this);
  }

  validate(value, validCfg)  {

  }

}
