const _ = require("lodash");

class Validator {
  constructor() {
    this.errors = {};
  }
  async validateQuizFields(flds) {
    for (let item of flds) {
      let { title, option1, option2, option3, option4, answer } = item;
      if (!title) return this.errors.title = "Enter title";
      if (title && !_.isString(title)) return this.errors.title = "Invalid title type";

      if (!option1) return this.errors.password = "Enter option one";
      if (!option2) return this.errors.password = "Enter option two";
      if (!option3) return this.errors.password = "Enter option three";
      if (!option4) return this.errors.password = "Enter option four";
      if (!answer)  returnthis.errors.password = "Enter answer";
    }
    // return this.errors;
  }
}

module.exports = Validator;
