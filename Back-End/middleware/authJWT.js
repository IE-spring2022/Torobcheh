const jwt = require("jsonwebtoken");
const config = require("../config/config");
const User = require("../model/user");
const bad_request = require("./bad_request");

verifyToken = (req, res, next) => {

  const token = req.headers["authorization"];
  if (!token) {
    return bad_request(res);
  }

  jwt.verify(token, config.secret, (err, decoded) => {
  if (err) {
    console.log('Unauthorized user!');
    return bad_request(res);//res.status(401).send({ message: "Unauthorized!" });
  }
  req.username = decoded.username; //todo this isn't working! looks like this variable is not set to the id in payload!
  console.log('user authorized');
  next();
  });
};

module.exports = verifyToken;
