// import model
const Quiz = require('../models/quiz');
const _ = require('lodash');

// import validator
const Validator = require('../validator/quiz.validator');

exports.postAddQuiz = async(req, res) => {
  try {
		// console.log(req.body)

		// validate input
		// const validator = new Validator();
		// let errors = await validator.validateQuizFields(req.body);
		// if(!_.isEmpty(errors)) return res.status(400).json(errors);

		await Quiz.bulkCreate(req.body);

		const quiz = await Quiz.findAll({raw: true});

		res.json(quiz)

	} catch (error) {
		console.log(error)
		return res.status(500).json({error: error.message})
	}
}

