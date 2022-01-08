const { check, validationResult } = require("express-validator");

const workvalidator = [
  check("name")
    .isLength({ min: 1, max: 20 })
    .withMessage("Name shuld be 1 to 20")
    .trim(),
  check("institute")
    .isLength({ min: 1 })
    .withMessage("Instutute name is required!")
    .trim(),
  check("deuration")
    .isLength({ min: 1 })
    .withMessage("Deuration is Required!")
    .trim(),
  check("description")
    .isLength({ min: 1 })
    .withMessage("Description is required")
    .trim(),
];
const educationvalidator = [
  check("name")
    .isLength({ min: 1, max: 20 })
    .withMessage("Name shuld be 1 to 20")
    .trim(),
  check("company")
    .isLength({ min: 1 })
    .withMessage("Company name is required!")
    .trim(),
  check("deuration")
    .isLength({ min: 1 })
    .withMessage("Deuration is Required!")
    .trim(),
  check("description")
    .isLength({ min: 1 })
    .withMessage("Description is required")
    .trim(),
];

const workvalidationHandler = (req, res, next) => {
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

module.exports = { workvalidationHandler, workvalidator, educationvalidator };
