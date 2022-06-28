const { STRIPE_SECRET } = process.env;

const stripe = require("stripe")(STRIPE_SECRET);

module.exports = ({ id: product }) =>
  stripe.prices.create({
    currency: "usd",
    custom_unit_amount: { enabled: true },
    product,
  });
