// External Imports
const bcrypt = require("bcrypt");
const createError = require("http-errors");
const jwt = require("jsonwebtoken");

// Internal Imports
const User = require("../models/People");
const Name = require("../models/Name");

// get dashboard
function getDashboard(req, res, next) {
  res.json({
    title: "This is Dasboard!",
  });
}

async function addUser(req, res, next) {
  let newUser;
  req.body.password = JSON.stringify(req.body.password);
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  if (req.files && req.files.length > 0) {
    newUser = new User({
      ...req.body,
      avatar: req.body.files[0].filename,
      password: hashedPassword,
    });
  } else {
    newUser = new User({
      ...req.body,
      password: hashedPassword,
    });
  }

  // save user ro send errors
  try {
    const result = await newUser.save();
    res.status(200).json({
      message: "user create successfully!",
    });
  } catch (err) {
    res.status(500).json({
      errors: {
        common: {
          msg: err.message,
        },
      },
    });
  }
}

// do Login
async function login(req, res, next) {
  try {
    // find user who has this email
    const user = await User.findOne({ email: req.body.email });
    req.body.password = JSON.stringify(req.body.password);
    if (user && user._id) {
      const isVaidPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );

      if (isVaidPassword) {
        //prepare the use object to tenerate token
        const userObject = {
          id: user._id,
          username: user.name,
          mobaile: user.mobaile || null,
          email: user.email,
          avatar: user.avatar || null,
          role: user.role || "user",
        };
        // Generate  token
        const token = jwt.sign(userObject, process.env.JWT_SECRET, {
          expiresIn: process.env.JWT_EXPIRY,
        });
        //set cookie
        // res.cookie(process.env.COOKIE_NAME, token, {
        //   maxAge: process.env.JWT_EXPIRY,
        //   httpOnly: true,
        //   signed: true,
        // });
        // console.log("cookie created successfully");
        // resporse logged in user data
        userObject.token = token;
        res.status(200).json({
          loggedInUser: userObject,
        });
      } else {
        throw createError("Login failed! Please try again.");
      }
    } else {
      throw createError("User not found! Please try again.");
    }
  } catch (err) {
    res.status(500).json({
      errors: {
        common: {
          msg: err.message,
        },
      },
    });
  }
}

// do logout
async function logout(req, res, next) {
  res.clearCookie(process.env.COOKIE_NAME);
  res.send("Logged out!");
}

// get user
async function getUser(req, res, next) {
  try {
    const result = await User.find({ email: req.query.email }).select({
      _id: 0,
      password: 0,
    });

    if (result && result.length > 0) {
      res.status(200).json({
        result,
      });
    } else {
      res.status(200).json({
        error: {
          common: {
            msg: "user not found!",
          },
        },
      });
    }
  } catch {
    next(createError("There was a problem!"));
  }
}

// get home data
async function getHome(req, res, next) {
  try {
    const result = await Name.find();

    res.status(200).json({
      result,
    });
  } catch {
    next(createError("There was a problem in server side!"));
  }
}

// name update
async function homeUpdate(req, res, next) {
  const data = {
    name: req.body.name,
    description: req.body.description,
    age: req.body.age,
    nationality: req.body.nationality,
    language: req.body.language,
    address: req.body.address,
    freelance: req.body.freelance,
  };
  try {
    const result = await Name.updateOne(data);

    res.status(200).json({
      data,
    });
  } catch {
    res.status(500).json({
      errors: "there was a problem in server site",
    });
  }
}

// Exports
module.exports = {
  getDashboard,
  addUser,
  login,
  logout,
  getUser,
  homeUpdate,
  getHome,
};
