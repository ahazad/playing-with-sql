// import model
const { Quiz } = require("../models");
const _ = require("lodash");

// import validator
const Validator = require("../validator/quiz.validator");

exports.postAddQuiz = async (req, res) => {
  try {
    // console.log(req.body)

    // validate input
    // const validator = new Validator();
    // let errors = await validator.validateQuizFields(req.body);
    // if(!_.isEmpty(errors)) return res.status(400).json(errors);

    await Quiz.bulkCreate(req.body);

    const quiz = await Quiz.findAll({ raw: true });

    res.json(quiz);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

exports.getQuizzes = async (req, res) => {
  try {
    const quiz = await Quiz.findAll({raw: true, where: {}});
    if(!quiz) return res.status(400).json({error: "No quiz found"});

    return res.json(quiz)
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
}

exports.getQuiz = async (req, res) => {
  try {
    let { quizId } = req.params;
    const quiz = await Quiz.findOne({ where: { id: quizId } });

    if (!quiz)
      return res.status(404).json({ error: "No quiz found with this id" });

    return res.json(quiz);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

exports.deleteQuiz = async (req, res) => {
  try {
    let { quizId } = req.params;

    await Quiz.destroy({ where: { id: quizId } });

    res.json({ success: "Quiz deleted!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

exports.updateQuiz = async (req, res) => {
  try {
		let { quizId } = req.params;
		let { title, option1, option2, option3, option4, answer } = req.body;
		
    await Quiz.update(
      { title, option1, option2, option3, option4, answer },
      { where: { id: quizId } }
    );

    const updatedQuiz = await Quiz.findAll({where: {}, raw: true})
		
		return res.json(updatedQuiz);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
