"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Quiz extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Quiz.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      option1: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      option2: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      option3: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      option4: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      answer: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Quiz",
    }
  );
  return Quiz;
};
