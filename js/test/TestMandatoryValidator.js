var exports = module.exports = {};

var Valid88Def = require('../src/core/Valid88.js');
// var Valid88 = require('../build/Valid88');

console.log('here')
console.log(exports)
var Valid88 = new exports.Valid88();

describe("Mandatory Validator Test", function() {
  var user = {firstname:'Joe', lastname:'Bloggs', dob:new Date(1999, 11, 23)};
  Valid88.validateInput('userdetails', {user:user});
});
