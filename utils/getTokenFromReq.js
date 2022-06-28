const R = require("ramda");

module.exports = R.pipe(
  R.pathOr("", ["headers", "authorization"]),
  R.split(" "),
  R.last
);
