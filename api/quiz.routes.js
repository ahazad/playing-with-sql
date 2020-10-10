const router = require('express').Router();

const quizController = require('../controller/quiz.controller');

router.get('/quiz', quizController.getQuizzes);

router.get("/quiz/:quizId", quizController.getQuiz);

router.post('/quiz/add', quizController.postAddQuiz);

router.delete("/quiz/delete/:quizId", quizController.deleteQuiz);

router.post("/quiz/update/:quizId", quizController.updateQuiz);



module.exports = router;