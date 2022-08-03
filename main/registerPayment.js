const axios = require("axios");

const { MAIN_SERVER_URI, AUTH0_TOKEN } = process.env;

module.exports = (paymentId) =>
  axios.get(`${MAIN_SERVER_URI}/api/v1/payments/${paymentId}/charge`, {
    headers: { authorization: `Bearer ${AUTH0_TOKEN}` },
  });
