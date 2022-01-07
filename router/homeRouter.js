// External Importa
const express = require("express");

// Internal Imports
const { getHomeData } = require("../controler/homeControler.js");

const router = express.Router();

// home router
router.get("/", getHomeData);

module.exports = router;
