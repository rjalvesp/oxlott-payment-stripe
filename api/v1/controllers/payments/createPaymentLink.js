const R = require("ramda");
const createLink = require("../../../../stripe/createLink");
const createPrice = require("../../../../stripe/createPrice");
const getAllProducts = require("../../../../stripe/getAllProducts");
const paymentLinkModel = require("../../../../models/payment-links.model");

const storePaymentLink = ({ _id: userId }, { id: paymentLinkId }) =>
  paymentLinkModel.create({ userId, paymentLinkId, paid: false });

module.exports = (req) => {
  return getAllProducts()
    .then(R.head)
    .then(createPrice)
    .then(R.propOr("", "id"))
    .then(createLink)
    .then((paymentLink) =>
      storePaymentLink(req.user, paymentLink).then(() => paymentLink)
    )
    .then(R.propOr("", "url"))
    .then(R.objOf("url"));
};
