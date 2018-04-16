class Valid88Def  {

  constructor() {
    this.validationDef = null;
  }

  registerValidationSet(validationSet) {
    this.validationDef = validationSet;
  }

  testInput(setname, payload) {
    var validationSet = this.getValidationSet(setname);
    validationSet.fields.map((item, index) => {
      console.log(item.name);
    });

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
