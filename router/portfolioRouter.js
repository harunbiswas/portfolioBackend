const express = require("express");
const { addPortfolio } = require("../controler/portfolioControler");
const photoUpload = require("../middlewares/portfolio/photoUpload");
const {
  portfolioValidationHandler,
  portfolioValidator,
} = require("../middlewares/portfolio/portfolioValidator");

const router = express.Router();

router.post(
  "/",
  portfolioValidator,
  portfolioValidationHandler,
  photoUpload,
  addPortfolio
);

module.exports = router;
