const express = require("express");
const { body } = require("express-validator");
const authController = require("../controllers/auth_controller");
const router = express.Router();

router.post(
  "/api/register",
  [
    body("username").trim().isLength({ min: 3 }),
    body("email").isEmail().normalizeEmail(),
    body("password").isLength({ min: 6 }),
  ],
  authController.register
);

router.post(
  "login",
  [
    body("email").isEmail().normalizeEmail(),
    body("password").isLength({ min: 6 }),
    body("password").isLength({ min: 6 }),
  ],
  authController.login
);

module.exports = router;
