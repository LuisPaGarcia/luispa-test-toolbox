const Router = require("express").Router;
const controller = require("./inbound.controllers");
const validators = require("./inbound.validators");
const router = Router();

router.get("/inbound", [validators.validateEmpty], controller);
router.post("/inbound", [validators.validateEmpty], controller);

module.exports = router;
