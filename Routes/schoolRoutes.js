const express = require("express");
const router = express.Router();

const {schooladd,schoollist} = require("../controllers/schoolcontrol")

router.post("/schooladd",schooladd)
router.get("/schoollist",schoollist)

module.exports = router;