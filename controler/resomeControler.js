const Skill = require("../models/Skill");

// add Skill
async function addSkill(req, res, next) {
  const { name, value } = req.body;
  const data = {
    name,
    value,
  };

  try {
    const result = await Skill.insertMany(data);
    res.status(200).json({
      result,
    });
  } catch {
    res.status(500).json({
      errors: "There was a problem in server Side.",
    });
  }
}

// get Skill
async function getSkill(req, res, next) {
  try {
    const result = await Skill.find();
    res.status(200).json({
      result,
    });
  } catch {
    res.status(500).json({
      errors: "There was a problem in server side!",
    });
  }
}

// update skill
async function updataSkill(req, res, next) {
  let { name, value, id } = req.body;
  id = typeof id === "string" && id.length >= 12 ? id : null;

  const data = {
    name,
    value,
  };

  if (id) {
    try {
      const fineSkill = await Skill.findById(id);
      try {
        const result = await Skill.findByIdAndUpdate(
          { _id: fineSkill._id },
          data
        );
        res.status(200).json({
          data,
        });
      } catch {
        res.status(500).json({
          errors: "Skill not found!",
        });
      }
    } catch {
      res.status(500).json({
        errors: "There was a problem in server side!",
      });
    }
  } else {
    res.status(400).json({
      errors: "There was a problem in server side!",
    });
  }
}

// delete Skill
async function deleteSkill(req, res, next) {
  let { id } = req.headers;
  id = typeof id === "string" && id.length >= 12 ? id : null;

  if (id) {
    try {
      const findSkill = await Skill.findById(id);
      try {
        result = await Skill.findByIdAndDelete(findSkill._id);
        res.status(200).json({
          msg: "Skill delete successfully!",
        });
      } catch {
        res.status(500).json({
          errors: "Skill not found!",
        });
      }
    } catch {
      res.status(500).json({
        errors: "There was a problem in server side!",
      });
    }
  } else {
    res.status(200).json({
      errors: "There was a problem in server side!",
    });
  }
}

module.exports = { addSkill, getSkill, updataSkill, deleteSkill };
