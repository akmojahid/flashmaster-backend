const authService = require("../services/auth_service");
const { validationResult } = require("express-validator");

exports.register = async (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password } = req.body;
    const user = await authService.registerUser(username, email, password);
    res
      .status(201)
      .json({ massage: "user registered succesfully", userId: user_id });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    const user = await authService.loginUser(email, password);

    res.json({ massage: "Login succesfull", token, userId: user._id });
  } catch (error) {
    next(error);
  }
};
