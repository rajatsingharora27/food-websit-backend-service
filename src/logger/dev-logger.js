const { createLogger, format, transports } = require("winston");
const { combine, timestamp, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${level}]: ${message}`;
});

const devLogger = () => {
  return createLogger({
    level: "debug",
    format: combine(timestamp({ format: "HH:mm:ss" }), myFormat),
    transports: [new transports.Console()],
  });
};

module.exports = devLogger;
