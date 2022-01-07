const { check, validationResult } = require("express-validator");

const skillValidation = [
  check("name")
    .isLength({ min: 1, max: 20 })
    .withMessage("Name shuld be 1 to 20 charactor!")
    .isAlpha("en-US", { ignore: " -" })
    .withMessage("Name shuld ne alphaber")
    .trim(),
  check("value")
    .isNumeric({ min: 0, max: 100 })
    .withMessage("Value shuld be 0 to 100!"),
];

const skillValidatorHandler = (req, res, next) => {
  const errors = validationResult(req);
  const mapperErrors = errors.mapped();

  if (Object.keys(mapperErrors).length === 0) {
    next();
  } else {
    res.status(400).json({ errors: mapperErrors });
  }
};

module.exports = { skillValidation, skillValidatorHandler };
