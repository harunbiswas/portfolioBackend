const mongoose = require("mongoose");

const educationQuSchema = mongoose.Schema(
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

const EducationQu = mongoose.model("EducationQu", educationQuSchema);

module.exports = EducationQu;
