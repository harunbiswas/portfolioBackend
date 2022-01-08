const mongoose = require("mongoose");

const portfolioSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      trim: true,
    },
    title: {
      type: String,
      require: true,
      trim: true,
    },
    link: {
      type: String,
      require: true,
      trim: true,
    },
    photo: {
      type: String,
      require: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Portfolio = mongoose.model("Portfolio", portfolioSchema);

module.exports = Portfolio;
