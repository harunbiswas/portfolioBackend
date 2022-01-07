const Review = require("../models/Review");

// add review
async function addReview(req, res, next) {
  const { name, title, description } = req.body;
  const data = {
    name,
    title,
    description,
  };
  try {
    const result = await Review.insertMany(data);
    res.status(200).json({
      result,
    });
  } catch (err) {
    res.status(500).json({
      errors: "There was a Problem in server side!",
    });
  }
}

// get review
async function getReview(req, res, next) {
  try {
    const result = await Review.find();
    res.status(200).json({
      result,
    });
  } catch (err) {
    res.status(500).json({
      errors: "There was a problem in server side!",
    });
  }
}

// Update review
async function updateReview(req, res, next) {
  const id =
    typeof req.body.id === "string" && req.body.id.length >= 12
      ? req.body.id
      : null;
  const { name, title, description } = req.body;
  const data = {
    name,
    title,
    description,
  };

  if (id) {
    try {
      const findReview = await Review.findById(id);
      try {
        const result = await Review.findByIdAndUpdate(
          { _id: findReview._id },
          data
        );
        res.status(200).json({
          result,
        });
      } catch {
        res.status(500).json({
          errors: "Reveiw not found!",
        });
      }
    } catch (err) {
      res.status(500).json({
        errors: "There was a problem in server side!",
      });
    }
  } else {
    res.status(400).json({
      errors: "There was a problem in your request!",
    });
  }
}

// delete review
async function deleteReview(req, res, next) {
  console.log(req.headers.id);
  const id =
    typeof req.headers.id === "string" && req.headers.id.length >= 12
      ? req.headers.id
      : null;

  if (id) {
    try {
      const findReview = await Review.findById(id);
      try {
        const result = await Review.findByIdAndDelete(findReview._id);
        res.status(200).json({
          msg: "Review deleted successfully!",
        });
      } catch {
        res.status(500).json({
          errors: "Reveiw not foun!",
        });
      }
    } catch {
      res.status(500).json({
        errors: "There was a problem in serverside!",
      });
    }
  } else {
    res.status(400).json({
      errors: "There was a problem in your request!",
    });
  }
}

module.exports = { addReview, getReview, updateReview, deleteReview };
