const router = require("express").Router();

router.use("/payments", require("./routes/payments"));
router.use("/webhook", require("./routes/webhook"));

module.exports = router;
