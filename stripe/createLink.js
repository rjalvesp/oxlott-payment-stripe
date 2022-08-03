const { STRIPE_SECRET } = process.env;

const stripe = require("stripe")(STRIPE_SECRET);

module.exports = (redirect) => (price) =>
  stripe.paymentLinks.create({
    line_items: [{ price, quantity: 1 }],
    after_completion: {
      redirect,
      type: "redirect",
    },
  });
