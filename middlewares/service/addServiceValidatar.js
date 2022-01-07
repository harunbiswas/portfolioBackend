const { check, validationResult } = require("express-validator");

// add service
const addServiceValidators = [
  check("title")
    .isLength({ min: 1, max: 100 })
    .withMessage("Title Should be 1 to 100 chactor!")
    .isAlpha("en-US", { ignore: " -&!" })
    .withMessage("Title must not anythisn other than alphabet!")
    .trim(),
  check("description")
    .isLength({ min: 1 })
    .withMessage("description is require!"),
];

const addServiceValidationHandler = function (req, res, next) {
  const errors = validationResult(req);
  const mappedErrors = errors.mapped();

  if (Object.keys(mappedErrors).length === 0) {
    next();
  } else {
    res.status(400).json({
      errors: mappedErrors,
    });
  }
};

module.exports = { addServiceValidators, addServiceValidationHandler };
