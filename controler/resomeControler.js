const Skill = require("../models/Skill");
const WorkEx = require("../models/WorkEx");
const EducationQu = require("../models/EducationQu");

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

// work exprince add
async function addWorkEx(req, res, next) {
  const { name, company, deuration, description } = req.body;

  const data = {
    name,
    company,
    deuration,
    description,
  };
  try {
    const result = await WorkEx.insertMany(data);

    res.status(200).json({
      result,
    });
  } catch {
    res.status(500).json({
      errors: "There was a problem in server side!",
    });
  }
}

// get work exprience data
async function getWorkEx(req, res, next) {
  try {
    const result = await WorkEx.find();
    res.status(200).json({
      result,
    });
  } catch {
    res.status(500).json({
      errros: "There was a problem in server side!",
    });
  }
}

// work exprince update
async function updateWorkEx(req, res, next) {
  let { name, institute, deuration, description, id } = req.body;

  const data = {
    name,
    institute,
    deuration,
    description,
  };
  id = typeof id === "string" && id.length >= 12 ? id : null;

  if (id) {
    try {
      const fineWork = await WorkEx.findById(id);
      try {
        const result = await WorkEx.findByIdAndUpdate(
          { _id: fineWork._id },
          data
        );
        res.status(200).json({
          data,
        });
      } catch {
        res.status(500).json({
          errors: "Work not found!",
        });
      }
    } catch {
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

// work exprince delete
async function deleteWorkEx(req, res, next) {
  let { id } = req.headers;
  id = typeof id === "string" && id.length >= 12 ? id : null;

  if (id) {
    try {
      const fineWork = await WorkEx.findById(id);
      try {
        const result = await WorkEx.findByIdAndDelete({ _id: fineWork._id });
        res.status(200).json({
          msg: "Work Exprience deleted successfully",
        });
      } catch {
        res.status(500).json({
          errors: "Work not found!",
        });
      }
    } catch {
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

// Education Qualification add
async function addEducationQu(req, res, next) {
  const { name, institute, deuration, description } = req.body;

  const data = {
    name,
    institute,
    deuration,
    description,
  };
  try {
    const result = await EducationQu.insertMany(data);

    res.status(200).json({
      result,
    });
  } catch {
    res.status(500).json({
      errors: "There was a problem in server side!",
    });
  }
}

// Education Qualification get data
async function getEducationQu(req, res, next) {
  try {
    const result = await EducationQu.find();
    res.status(200).json({
      result,
    });
  } catch {
    res.status(500).json({
      errros: "There was a problem in server side!",
    });
  }
}

//Education Qualification  update
async function updateEducationQu(req, res, next) {
  let { name, institute, deuration, description, id } = req.body;

  const data = {
    name,
    institute,
    deuration,
    description,
  };
  id = typeof id === "string" && id.length >= 12 ? id : null;

  if (id) {
    try {
      const fineEducation = await EducationQu.findById(id);
      try {
        const result = await EducationQu.findByIdAndUpdate(
          { _id: fineEducation._id },
          data
        );
        res.status(200).json({
          data,
        });
      } catch {
        res.status(500).json({
          errors: "Education Qualification not found!",
        });
      }
    } catch {
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

// Education Qualification delete
async function deleteEducationQu(req, res, next) {
  let { id } = req.headers;
  id = typeof id === "string" && id.length >= 12 ? id : null;

  if (id) {
    try {
      const fineEducation = await EducationQu.findById(id);
      try {
        const result = await EducationQu.findByIdAndDelete({
          _id: fineEducation._id,
        });
        res.status(200).json({
          msg: "Education qualification deleted successfully",
        });
      } catch {
        res.status(500).json({
          errors: "Education qualification not found!",
        });
      }
    } catch {
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

module.exports = {
  addSkill,
  getSkill,
  updataSkill,
  deleteSkill,
  addWorkEx,
  getWorkEx,
  updateWorkEx,
  deleteWorkEx,
  addEducationQu,
  getEducationQu,
  updateEducationQu,
  deleteEducationQu,
};
