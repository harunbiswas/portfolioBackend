// External Imports

// Internal Imports

// contorler
function getHomeData(req, res, next) {
  res.json({
    name: "Harun Biswas Rubel",
    subTitle: "Fullstack Web Developer",
  });
}

// export

module.exports = {
  getHomeData,
};
