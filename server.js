// import lib
const express = require('express');
const cors = require('cors');
const passport = require('passport');
const db = require('./models');

// import db instance
// const db = require('./config/db');

// initiate app instancd
const app = express();

// app variables
const PORT = process.env.PORT || 8000;

// import routes
const authRoutes = require('./api/auth.routes');
const quizRoutes = require('./api/quiz.routes');
const userRoutes = require("./api/user.routes");
const leaderboardRoutes = require('./api/leaderboard.routes');


// app config
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// auth config
app.use(passport.initialize());
require('./config/auth.config')(passport);


// run db
db.sequelize.sync().then(() => console.log("DB is connected"))
// db.authenticate()
//   .then(() => {
//     console.log("DB connected");
//   })
//   .catch((err) => console.log("Unable to connect"));

// run routes
app.use('/api' ,authRoutes);
app.use('/api', quizRoutes);
app.use('/api', userRoutes);
app.use('/api', leaderboardRoutes);


// spin up server
app.listen(PORT, error => {
    if(error) console.log(error);
    console.log(`Server is running at ${PORT}`);
})

