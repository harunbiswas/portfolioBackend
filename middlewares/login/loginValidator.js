const { check, validationResult } = require("express-validator");
const createError = require("http-errors");
const { unlink } = require("fs");
const path = require("path");

const User = require("../../models/People");

// add user
const loginValidators = [
  check("email").isEmail().withMessage("Invalid email address").trim(),
  check("password").isLength({ min: 1 }).withMessage("Password is required!"),
];

const loginValidatationHandler = function (req, res, next) {
  const errors = validationResult(req);
  const mappedErrors = errors.mapped();
  if (Object.keys(mappedErrors).length === 0) {
    next();
  } else {
    res.status(500).json({
      errors: mappedErrors,
    });
  }
};

module.exports = { loginValidators, loginValidatationHandler };
