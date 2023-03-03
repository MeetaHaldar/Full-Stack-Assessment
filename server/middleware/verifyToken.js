const jwt = require("jsonwebtoken");
function verifyToken(req, res, next) {
  let token = req.headers["authorization"];
  if (token) {
    // token = token.split(" ")[1];
    jwt.verify(token, process.env.JWT_KEY, (err, valid) => {
      if (err) {
        res.status(401).send({ meassage: "please provide valid token" });
      } else {
        next();
      }
    });
  } else {
    res.status(403).send({ result: "Please add token with headers" });
  }
}
module.exports = verifyToken;
