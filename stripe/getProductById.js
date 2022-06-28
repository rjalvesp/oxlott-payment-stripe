const { STRIPE_SECRET } = process.env;

const stripe = require("stripe")(STRIPE_SECRET);

module.exports = (id) => stripe.products.retrieve(id);
