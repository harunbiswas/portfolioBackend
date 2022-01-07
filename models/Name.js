const mongoose = require("mongoose");

const nameSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      trim: true,
      default: "Harun Biswas Rubel",
    },
    bio: {
      type: String,
      require: true,
      trim: true,
      default: "I'm a fullstack web developer.",
    },

    description: {
      type: String,
      require: true,
      trim: true,
      default: "I'm a fullstack web developer.",
    },
    age: {
      type: String,
      require: true,
      trim: true,
      default: "20 years",
    },
    nationality: {
      type: String,
      require: true,
      trim: true,
      default: "Bangladeshi",
    },
    language: {
      type: String,
      require: true,
      trim: true,
      default: "Bangla",
    },
    address: {
      type: String,
      require: true,
      trim: true,
      default: "Barisal, Bangladesh",
    },
    freelance: {
      type: String,
      require: true,
      trim: true,
      default: "avilable",
    },
    avatar: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Name = mongoose.model("Name", nameSchema);

module.exports = Name;
