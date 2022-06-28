const { STRIPE_SECRET } = process.env;

const stripe = require("stripe")(STRIPE_SECRET);

module.exports = () =>
  stripe.webhookEndpoints.create({
    url: "http://localhost:3001/api/v1/payments/webhook",
    enabled_events: ["charge.failed", "charge.succeeded"],
  });
