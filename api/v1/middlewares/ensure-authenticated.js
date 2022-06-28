const R = require("ramda");
const getTokenFromReq = require("../../../utils/getTokenFromReq");
const getUser = require("../../../main/getUser");

module.exports = (req, res, next) => {
  const token = getTokenFromReq(req);
  getUser(token)
    .then(R.propOr(null, "data"))
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((a) => res.status(403).json(a));
};
