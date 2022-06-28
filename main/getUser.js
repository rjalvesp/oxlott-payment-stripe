const axios = require("axios");

const { MAIN_SERVER_URI } = process.env;

module.exports = (token) =>
  axios.get(`${MAIN_SERVER_URI}/api/v1/users/me`, {
    headers: { authorization: `Bearer ${token}` },
  });
