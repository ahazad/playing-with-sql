const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const Admin = require('../models/admin');

require("dotenv").config();

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET_KEY;

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(opts, async (jwt_payload, done) => {
      const adminId = jwt_payload.id;
      try {

        const admin = await Admin.findOne({raw: true, where: {id: adminId}});
        // let user;
        // let {userType} = jwt_payload;
        // find and attach user info conditionaly
        // if(userType === 'customer') {
        //   user = await db.collection("customer").findOne({ _id: con.ObjectID(userId) });
        // } else if(userType === 'dealer') {
        //   user = await db.collection('dealer').findOne({_id: new con.ObjectID(userId)});
        // }

        // user = {
        //   userType,
        //   ...user
        // }
        
        if (admin) return done(null, admin);
        return done(null, false);
      } catch (error) {
        console.log(error);
        res.status(401).json(error);
      }
    })
  );
};
