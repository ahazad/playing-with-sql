const {Quiz, User} = require('../models');

exports.getResult = async (req, res) => {
  try {

    // await User.drop();
    // res.send("droped")
    const answers = req.body;
    const {username} = req.user;

    const quiz = await Quiz.findAll({
      attributes: ['id', 'answer'],
      raw: true,
    });

    const scores = quiz.filter(q => {
      return answers.some(a => q.id === a.id && q.answer === a.answer)
    }).length;
   
    const user = await User.findOne({where: {username: username}})
    user.score = scores;
    await user.save();

    return res.json({scores})
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}