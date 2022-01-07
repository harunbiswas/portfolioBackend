const express = require("express");
const {
  addService,
  getService,
  updateService,
  deleteService,
} = require("../controler/serviceControler");
const checkLogin = require("../middlewares/common/checkLogin");
const {
  addServiceValidators,
  addServiceValidationHandler,
} = require("../middlewares/service/addServiceValidatar");
const router = express.Router();

// add service
router.post(
  "/",
  checkLogin,
  addServiceValidators,
  addServiceValidationHandler,
  addService
);

// get servises
router.get("/", checkLogin, getService);
// update service
router.put(
  "/",
  //checkLogin,
  addServiceValidators,
  addServiceValidationHandler,
  updateService
);
// delete service
router.delete("/", checkLogin, deleteService);

module.exports = router;
