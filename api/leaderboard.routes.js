const router = require('express').Router();

const leaderBoardController = require('../controller/leaderboard.controller');

router.get('/leaderboard', leaderBoardController.getLeaderboard);


module.exports = router;