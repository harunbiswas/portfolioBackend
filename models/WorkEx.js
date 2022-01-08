const mongoose = require("mongoose");

const workExSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      trim: true,
    },
    company: {
      type: String,
      require: true,
      trim: true,
    },
    deuration: {
      type: String,
      require: true,
      trim: true,
    },
    description: {
      type: String,
      require: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const WorkEx = mongoose.model("workEx", workExSchema);

module.exports = WorkEx;
