const _ = require("lodash");

class Validator {
  constructor() {
    this.errors = {};
  }
  async validateAdminCreds(flds) {
    
    let {username, password} = flds;
    if(!username) this.errors.username = "Enter username";
    if(username && !_.isString(username)) this.errors.username = "Invalid username type";

    if(!password) this.errors.password = "Enter password";
    
    return this.errors;
  }

}

module.exports = Validator;
