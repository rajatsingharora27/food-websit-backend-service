const { StatusCodes } = require("http-status-codes");
const { LoginService } = require("../services/index");

const loginService = new LoginService();
class LoginController {
  constructor() {}

  async loginUser(req, res) {
    let user;
    try {
      user = await loginService.loginUser(req.body);
      res.status(StatusCodes.OK).json({
        message: "Login Successful",
        error: {},
        data: user,
      });
    } catch (error) {
      res.status(StatusCodes.BAD_REQUEST).json({
        message: "Login Failed",
        error: error.message,
        data: {},
      });
    }
  }
}

module.exports = LoginController;
