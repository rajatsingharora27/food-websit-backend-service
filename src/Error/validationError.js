const { StatusCode } = require("http-status-codes");

class ValidationError extends Error {
  constructor(
    name,
    message = "Error in Service layer",
    statusCode = StatusCode.BadRequest
  ) {
    super();
    this.name = name;
    this.message = message;
    this.statusCode = statusCode;
  }
}

module.exports = ValidationError;
