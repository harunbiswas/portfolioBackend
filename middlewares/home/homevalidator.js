const { check, validationResult } = require("express-validator");

const Home = require("../../models/Name");

// update home handler
const homeValidator = [
  check("name")
    .isLength({ min: 1, max: 50 })
    .withMessage("Name should be 1 to 50!")
    .isAlpha("en-US", { ignore: " -" })
    .withMessage("Name must not contain anythisn orher than alphabet")
    .trim(),
  check("description")
    .isLength({ min: 1 })
    .withMessage("Descriprion is require!")
    .trim(),
];

// homevalidator handler
async function homeValidatorHandler(req, res, next) {
  const errors = validationResult(req);
  const mappemErrors = errors.mapped();

  if (Object.keys(mappemErrors).length === 0) {
    next();
  } else {
    // send response

    res.status(400).json({
      errors: mappemErrors,
    });
  }
}

// export modules
module.exports = {
  homeValidator,
  homeValidatorHandler,
};
