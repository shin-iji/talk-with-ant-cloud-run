const express = require("express");
const router = express.Router();

const ownerController = require("../controllers/owner-controller");

router.route("/verify").post(ownerController.checkVerifyId);

router.route("/").get(ownerController.getAllOwner);

module.exports = router;
