const { User } = require('../models');

exports.loginUser = async(req, res) => {
  try {
    let { username } = req.body;

    const isExist = await User.findOne({where: {username: username}});

    if(!isExist) await User.create({username});

    return res.json({success: "Welcome to the quiz"});

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}