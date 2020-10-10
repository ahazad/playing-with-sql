// import model
const { Admin, User } = require("../models");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

// import validator
const Validator = require('../validator/auth.validator');
const passport = require("passport");

require('dotenv').config();

exports.postAdminLogin = async (req, res) => {
    try {
      const { username, password } = req.body; 
  
      // validate input
      const validator = new Validator();
      let errors = await validator.validateAdminCreds(req.body);
      if(!_.isEmpty(errors)) return res.status(400).json(errors)

      const admin = await Admin.findOne({ raw: true, where: { username: username } });
     
      // check if admin info found in db
      if(!admin) return res.status(400).json({error: "No admin found!"});

      // check for password match
      const doMatch = await bcrypt.compare(password, admin.password);
      if(!doMatch) return res.status(401).json({error: "Incorrect password"});

      // sign jwt token
      delete admin.password;
      const payload = {
        ...admin,
        userType: 'admin'
      }

      // token validity : 2 hours
      const token = jwt.sign(payload, process.env.JWT_SECRET_KEY)

      return res.json({
        success: "Admin logged in successfully",
        token: `Bearer ${token}`
      });
    } catch (error) {
      console.log(error);
    }
}


exports.loginUser = async(req, res) => {
  try {
    let { username } = req.body;
    let user;

    user = await User.findOne({where: {username: username}, raw: true});

    if(!user) {
      await User.create({username: username});
      user = await User.findOne({where: {username: username}, raw: true})
    } 

    const payload = {
      ...user,
      userType: 'user'
    }
    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY)

    return res.json({
      success: "User logged in successfully",
      token: `Bearer ${token}`
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}