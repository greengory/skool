const express = require("express");
const router = express();
const frontendController = require("../../controllers/frontend/controllers");

router.get("/", frontendController.home);
router.get("/account/edit/:username", frontendController.editAccount);
router.get("/account/student/create", frontendController.createAccount);

module.exports = router;
