const env = process.env.NODE_ENV || "development";

const baseConfig = {
  env,
  isDev: env === "development",
  isTest: env === "testing",
  port: 3001,
};

let envConfig = {}; // Config by environment

module.exports = Object.assign({}, baseConfig, envConfig);
