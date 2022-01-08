const Portfolio = require("../models/Portfolio");

// post Portfolio
async function addPortfolio(req, res, next) {
  const { name, title, link } = req.body;
  const photo = req.body.file.name;
  const data = {
    name,
    title,
    link,
    photo,
  };

  try {
    const result = await Portfolio.insertMany(data);
    res.status(200).json({
      result,
    });
  } catch {
    res.status(500).json({
      errors: "There was a problem in server side!",
    });
  }
}

module.exports = { addPortfolio };
