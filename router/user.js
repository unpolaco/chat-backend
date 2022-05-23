const router = require("express").Router();
const { update } = require("../controllers/userControllers");
const { auth } = require("../middleware/auth");
const { userFile } = require("../middleware/fileUpload");
const { validate } = require("../validators");
const { updateRules } = require("../validators/user/update");

router.post("/update", [auth, userFile, updateRules(), validate], update);

module.exports = router;
