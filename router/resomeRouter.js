const express = require("express");
const checkLogin = require("../middlewares/common/checkLogin");
const {
  addSkill,
  getSkill,
  updataSkill,
  deleteSkill,
  addWorkEx,
  getWorkEx,
  updateWorkEx,
  deleteWorkEx,
} = require("../controler/resomeControler");
const {
  skillValidation,
  skillValidatorHandler,
} = require("../middlewares/skill/skillValidator");
const {
  workvalidator,
  workvalidationHandler,
} = require("../middlewares/work/workvalidator");

const router = express.Router();

// Add skill
router.post(
  "/skill",
  checkLogin,
  skillValidation,
  skillValidatorHandler,
  addSkill
);

// get Skill
router.get("/skill", checkLogin, getSkill);

// update skill
router.put(
  "/skill",
  checkLogin,
  skillValidation,
  skillValidatorHandler,
  updataSkill
);

// delete Skill
router.delete("/skill", checkLogin, deleteSkill);

// work exprience add
router.post(
  "/work",
  checkLogin,
  workvalidator,
  workvalidationHandler,
  addWorkEx
);

// work expricence get data
router.get("/work", checkLogin, getWorkEx);

// work exprience update
router.put(
  "/work",
  checkLogin,
  workvalidator,
  workvalidationHandler,
  updateWorkEx
);

// work exprience delete
router.delete("/work", checkLogin, deleteWorkEx);

module.exports = router;
