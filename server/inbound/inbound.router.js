const Router = require("express").Router;
const controller = require("./inbound.controllers");
const validators = require("./inbound.validators");
const router = Router();

router.get("/", [validators.validateEmpty], controller);
router.post("/", [validators.validateEmpty], controller);

module.exports = router;
