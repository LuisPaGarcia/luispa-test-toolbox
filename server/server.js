const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

const config = require("./config");
const inboundRouter = require("./inbound/inbound.router");

app.disable("x-powered-by");
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/inbound", inboundRouter);

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
