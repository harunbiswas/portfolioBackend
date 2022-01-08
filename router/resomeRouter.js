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
  addEducationQu,
  getEducationQu,
  updateEducationQu,
  deleteEducationQu,
} = require("../controler/resomeControler");
const {
  skillValidation,
  skillValidatorHandler,
} = require("../middlewares/skill/skillValidator");
const {
  workvalidator,
  workvalidationHandler,
  educationvalidator,
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

// Education Qualification add
router.post(
  "/education",
  checkLogin,
  educationvalidator,
  workvalidationHandler,
  addEducationQu
);

// Education Qualification  get data
router.get("/education", checkLogin, getEducationQu);

// Education Qualification  update
router.put(
  "/education",
  //checkLogin,
  educationvalidator,
  workvalidationHandler,
  updateEducationQu
);

//Education Qualification  delete
router.delete("/education", deleteEducationQu);

module.exports = router;
