// External Importa
const express = require("express");

// Internal Imports
const {
  getDashboard,
  addUser,
  login,
  logout,
  getUser,
  homeUpdate,
  getHome,
} = require("../controler/dashboardControler.js");
const avatarUpload = require("../middlewares/user/avatarUpload");
const {
  addUserValidators,
  addUserValidatationHandler,
} = require("../middlewares/user/userValidator");
const {
  loginValidators,
  loginValidatationHandler,
} = require("../middlewares/login/loginValidator");

const checkLogin = require("../middlewares/common/checkLogin");

const {
  homeValidatorHandler,
  homeValidator,
} = require("../middlewares/home/homevalidator");

const router = express.Router();

// home router
router.get("/", getDashboard);

// create user
router.post(
  "/singup",
  avatarUpload,
  addUserValidators,
  addUserValidatationHandler,
  addUser
);

// Login user
router.post("/login", loginValidators, loginValidatationHandler, login);

// logout user
router.delete("/", logout);

// logdin user info
router.get("/user", getUser);

// get home data
router.get("/home", getHome);

// home page edit
router.put(
  "/home",
  checkLogin,
  homeValidator,
  homeValidatorHandler,
  homeUpdate
);

// Export the router
module.exports = router;
