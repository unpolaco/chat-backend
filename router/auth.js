const router = require("express").Router();
const { login, register } = require("../controllers/authController");
const { validate } = require("../validators");
const { registrationRules } = require("../validators/auth/register");
const { loginRules } = require("../validators/auth/login");

router.post("/register", [registrationRules(), validate], register);

router.post("/login", [loginRules(), validate], login);

module.exports = router;
