const { check, validationResult } = require("express-validator");

const portfolioValidator = [
  check("name")
    .isLength({ min: 1, max: 50 })
    .withMessage("Name shuld be 1 to 50")
    .trim(),
  check("title").isLength({ min: 1 }).withMessage("Title is required!").trim(),
  check("link").isURL().withMessage("Link shuld be a URL!"),
  check("file").notEmpty().withMessage("Photo is required!"),
];

const portfolioValidationHandler = (req, res, next) => {
  console.log(req.body.file);
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

module.exports = { portfolioValidator, portfolioValidationHandler };
