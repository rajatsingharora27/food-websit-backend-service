const { NODE_DEV_ENV } = require("../config/server-config");
const devLogger = require("./dev-logger");
let logger = null;

if (NODE_DEV_ENV === "devEnv") {
  logger = devLogger();
}

module.exports = logger;
