const express = require("express");
const router = express();
const frontendController = require("../../controllers/frontend/controllers");

router.get("/", frontendController.home);

module.exports = router;