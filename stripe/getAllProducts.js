const R = require("ramda");

const { STRIPE_SECRET } = process.env;

const stripe = require("stripe")(STRIPE_SECRET);

module.exports = () =>
  stripe.products
    .list({
      limit: 10,
    })
    .then(R.propOr([], "data"));
