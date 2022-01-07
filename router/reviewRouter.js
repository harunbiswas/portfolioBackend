const express = require("express");
const {
  addReview,
  getReview,
  updateReview,
  deleteReview,
} = require("../controler/reviewControler");
const checkLogin = require("../middlewares/common/checkLogin");
const {
  addReviewValidators,
  addReviewValidationHandler,
} = require("../middlewares/review/addReviewValidator");

const router = express.Router();

// add review
router.post(
  "/",
  checkLogin,
  addReviewValidators,
  addReviewValidationHandler,
  addReview
);

// get review
router.get("/", checkLogin, getReview);

// update review
router.put(
  "/",
  checkLogin,
  addReviewValidators,
  addReviewValidationHandler,
  updateReview
);

// delete review
router.delete("/", checkLogin, deleteReview);

module.exports = router;
