const createError = require("http-errors");
const Service = require("../models/Service");

// post service
async function addService(req, res, next) {
  const data = {
    title: req.body.title,
    description: req.body.description,
  };
  try {
    const result = await Service.insertMany(data);

    res.status(200).json({
      data,
    });
  } catch {
    res.status(500).json({
      errors: "There was a problem in server site",
    });
  }
}

// get servese
async function getService(req, res, next) {
  try {
    const result = await Service.find();
    res.status(200).json({
      result,
    });
  } catch {
    res.status(500).json({
      errors: "There was a problem in server side!",
    });
  }
}

// Update servise
async function updateService(req, res, next) {
  const data = {
    title: req.body.title,
    description: req.body.description,
  };
  const id =
    typeof req.body.id === "string" && req.body.id.length >= 12
      ? req.body.id
      : null;

  if (id) {
    try {
      const fineService = await Service.findById(id);
      try {
        const result = await Service.findOneAndUpdate(
          { _id: fineService._id },
          data
        );

        res.status(200).json({
          result,
        });
      } catch {
        req.status(500).json({
          errors: "Service not found!",
        });
      }
    } catch {
      res.status(500).json({
        errors: "There was a problem in server side!",
      });
    }
  } else {
    res.status(500).json({
      errors: "Service not found!",
    });
  }
}

// delete servise
async function deleteService(req, res, next) {
  const id =
    typeof req.headers.id === "string" && req.headers.id.length >= 12
      ? req.headers.id
      : null;
  if (id) {
    try {
      const fineService = await Service.findById(id);
      try {
        const result = await Service.findOneAndDelete(fineService._id);

        res.status(200).json({
          msg: "Service deleted successfully",
        });
      } catch {
        req.status(500).json({
          errors: "Service not found!",
        });
      }
    } catch {
      res.status(500).json({
        errors: "There was a problem in serverside!",
      });
    }
  } else {
    res.status(400).json({
      errors: "Service not found!!",
    });
  }
}

module.exports = {
  addService,
  getService,
  updateService,
  deleteService,
};
