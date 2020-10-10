const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const {Admin, User} = require('../models');

require("dotenv").config();

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET_KEY;

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(opts, async (jwt_payload, done) => {
      const id = jwt_payload.id;
      try {
        console.log(jwt_payload)
        let user;
        let {userType} = jwt_payload;
        // find and attach user info conditionaly
        if(userType === 'admin') {
          user = await Admin.findOne({raw: true, where: {id: id}});
        } else if(userType === 'user') {
          user = await User.findOne({raw: true, where: {id: id}});;
        }

        user = {
          userType,
          ...user
        }
  
        if (user) return done(null, user);
        return done(null, false);
      } catch (error) {
        console.log(error);
        res.status(401).json(error);
      }
    })
  );
};
