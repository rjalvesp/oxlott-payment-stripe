const ensureAuthenticated = require("../../middlewares/ensure-authenticated");
const createPaymentLink = require("../../controllers/payments/createPaymentLink");
const router = require("express").Router();

router.get("/", ensureAuthenticated, (req, res) => {
  createPaymentLink(req).then((value) => res.status(200).json(value));
});

module.exports = router;
