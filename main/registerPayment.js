const axios = require("axios");

const { MAIN_SERVER_URI, AUTH0_TOKEN } = process.env;

module.exports = (paymentLinkId) =>
  axios.get(`${MAIN_SERVER_URI}/api/v1/payments/charge/${paymentLinkId}`, {
    headers: { authorization: `Bearer ${AUTH0_TOKEN}` },
  });
