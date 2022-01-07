const { check, validationResult } = require("express-validator");

const addReviewValidators = [
  check("name")
    .isLength({ min: 1, max: 20 })
    .withMessage("Name must shuld be 1 to 20 chrector!")
    .isAlpha("en-US", { ignore: " ." })
    .withMessage("Name must be alphabet!")
    .trim(),
  check("title")
    .isLength({ min: 1, max: 50 })
    .withMessage("Title must shuld be 1 to 50 chrector!")
    .isAlpha("en-US", { ignore: " .-" })
    .withMessage("Name must be alphabet!")
    .trim(),
  check("description")
    .isLength({ min: 1 })
    .withMessage("description is require!"),
];

const addReviewValidationHandler = function (req, res, next) {
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

module.exports = {
  addReviewValidators,
  addReviewValidationHandler,
};
