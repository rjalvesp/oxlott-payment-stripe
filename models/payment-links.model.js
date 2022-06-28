const { model: schema } = require("../schemas/payment-links.schema");
const { db } = require("../database");

module.exports = db.createModel({
  type: "payment-link",
  design: "paymentLinks",
  schema,
});
