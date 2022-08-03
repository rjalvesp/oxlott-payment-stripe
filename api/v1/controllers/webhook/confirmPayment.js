const R = require("ramda");
const RA = require("ramda-adjunct");
const registerPayment = require("../../../../main/registerPayment");
const paymentModel = require("../../../../models/payments.model");

const parseCheckoutSessionData = R.pipe(
  R.pathOr({}, ["body", "data", "object"]),
  R.pick([
    "id",
    "amount_subtotal",
    "amount_total",
    "payment_link",
    "payment_intent",
    "payment_status",
  ]),
  RA.renameKeys({
    id: "checkoutSession",
    amount_subtotal: "amountSubtotal",
    amount_total: "amountTotal",
    payment_link: "paymentId",
    payment_intent: "paymentIntentId",
  }),
  (value) => ({
    ...value,
    paid: value.payment_status === "paid",
  }),
  R.omit(["payment_status"])
);

module.exports = (req) => {
  const { paymentId, ...data } = parseCheckoutSessionData(req);

  return paymentModel
    .find({
      selector: { paymentId },
      sort: [{ createdAt: "desc" }],
      limit: 1,
    })
    .then(R.propOr([], "data"))
    .then(R.head)
    .then(R.omit(["_rev", "createdAt", "type"]))
    .then(R.mergeDeepLeft(data))
    .then(({ _id, ...value }) =>
      paymentModel
        .update(_id, value)
        .then(() => registerPayment(_id.split(":")[1]))
    );
};
