const confirmPaymentLink = require("../../controllers/webhook/confirmPaymentLink");
const router = require("express").Router();

router.post("/", (req, res) => {
  confirmPaymentLink(req).then(res.status(200).json({ ok: true }));
});

module.exports = router;
