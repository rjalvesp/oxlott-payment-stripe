const { STRIPE_SECRET } = process.env;

const stripe = require("stripe")(STRIPE_SECRET);

module.exports = (price) =>
  stripe.paymentLinks.create({
    line_items: [{ price, quantity: 1 }],
  });
