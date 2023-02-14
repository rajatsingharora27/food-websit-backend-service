const { StatusCode } = require("http-status-codes");

class RepositoryError extends Error {
  constructor(name, message = "Error in repository", statusCode = 500) {
    this.name = name;
    this.message = message;
    this.statusCode = statusCode;
  }
}
