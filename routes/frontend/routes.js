const express = require("express");
const router = express();
const frontendController = require("../../controllers/frontend/controllers");

router.get("/", frontendController.home);
router.get("/account/:username", frontendController.edit);
router.get("/account/student/create", frontendController.createAccount);

module.exports = router;
