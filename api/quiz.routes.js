const router = require('express').Router();

const quizController = require('../controller/quiz.controller');

router.post('/quiz/add', quizController.postAddQuiz);

router.delete("/quiz/delete/:quizId", quizController.deleteQuiz);

router.get("/quiz/:quizId", quizController.getQuiz);

router.post("/quiz/update/:quizId", quizController.updateQuiz);



module.exports = router;