const {User} = require('../models');


exports.getLeaderboard = async (req, res) => {
  try {
    const leaderboard = await User.findAll({
      where: {},
      order: [
        ['score', 'DESC']
      ],
      raw: true,
    });

    return res.json(leaderboard)
  } catch(error) {
    console.log(error);
    return res.status(500).json({error: error.message});
  }
}