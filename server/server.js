const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
// Start express app
const app = express();

// Import config and router
const config = require("./config");
const inboundRouter = require("./inbound/inbound.router");

// Disable headers
app.disable("x-powered-by");

// Add global middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Apply first API route
app.use("/api", inboundRouter);

// Start core function
const start = async () => {
  try {
    app.listen(config.port, () => {
      console.log(`REST API on http://localhost:${config.port}/api`);
    });
  } catch (e) {
    console.error(e);
  }
};

module.exports = start;
