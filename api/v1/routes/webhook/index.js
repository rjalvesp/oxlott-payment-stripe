const confirmPayment = require("../../controllers/webhook/confirmPayment");
const router = require("express").Router();

router.post("/", (req, res) => {
  confirmPayment(req).then(res.status(200).json({ ok: true }));
});

module.exports = router;
