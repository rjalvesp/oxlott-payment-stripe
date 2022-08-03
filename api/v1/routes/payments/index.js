const ensureAuthenticated = require("../../middlewares/ensure-authenticated");
const createPayment = require("../../controllers/payments/createPayment");
const router = require("express").Router();

router.get("/", ensureAuthenticated, (req, res) => {
  createPayment(req).then((value) => res.status(200).json(value));
});

module.exports = router;
