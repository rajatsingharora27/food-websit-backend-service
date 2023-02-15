const logger = require("../logger");

const validateUser = (data, inputRequestData) => {
  if (!data.isAdmin) {
    logger.info("User is not admin");
    return { message: "User is not admin", validateUser: false };
  }
  if (data.email !== inputRequestData.email) {
    logger.info("Email does not match");
    return { message: "Email id enterd is wrong", validateUser: false };
  }
  if (data.password !== inputRequestData.password) {
    logger.info("Password does not match");
    return { message: "Password enterd is wrong", validateUser: false };
  }
  return { message: "User is valid", validateUser: true };
};

module.exports = validateUser;
