/**
 *  Since it is for Admin dashboard only the user who is admin will be abele
 *  to login ,
 *  There is no requirement of the signup functinality
 *
 */
const axios = require("axios");
const { StatusCodes } = require("http-status-codes");
const ValidationError = require("../Error/validationError");
const logger = require("../logger");
const { validatAdmin } = require("../Validation/index");

class LoginUser {
  async loginUser(inputRequestData) {
    try {
      const isAdmin = await axios({
        method: "get",
        url: "http://localhost:3001/api/v1/user",
        data: inputRequestData.email,
      });
      const validationResponse = validatAdmin(
        isAdmin.data.result[0],
        inputRequestData
      );
      if (validationResponse.validateUser === false) {
        console.log(validationResponse.message);

        throw new ValidationError(
          "Validation error",
          validationResponse.message,
          StatusCodes.BAD_REQUEST
        );
      }

      return true;
    } catch (error) {
      logger.info("Service Layer Error", error);
      throw error;
    }
  }
}
module.exports = LoginUser;
