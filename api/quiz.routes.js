const router = require('express').Router();

const quizController = require('../controller/quiz.controller');

router.post('/quiz/add', quizController.postAddQuiz);

module.exports = router;