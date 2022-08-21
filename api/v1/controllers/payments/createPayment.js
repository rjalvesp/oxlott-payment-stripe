const R = require("ramda");
const createLink = require("../../../../stripe/createLink");
const createPrice = require("../../../../stripe/createPrice");
const getAllProducts = require("../../../../stripe/getAllProducts");
const paymentModel = require("../../../../models/payments.model");

const storePayment = (user, { id: paymentId }) =>
  paymentModel.create({ userId: user._id, paymentId, paid: false, user });

module.exports = (req) => {
  return getAllProducts()
    .then(R.head)
    .then(createPrice)
    .then(R.propOr("", "id"))
    .then(createLink(req.query))
    .then((payment) => storePayment(req.user, payment).then(() => payment))
    .then(R.propOr("", "url"))
    .then(R.objOf("url"));
};
