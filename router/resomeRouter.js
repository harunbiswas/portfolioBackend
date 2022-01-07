const express = require("express");
const checkLogin = require("../middlewares/common/checkLogin");
const {
  addSkill,
  getSkill,
  updataSkill,
  deleteSkill,
} = require("../controler/resomeControler");
const {
  skillValidation,
  skillValidatorHandler,
} = require("../middlewares/user/skill/skillValidator");

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

module.exports = router;
