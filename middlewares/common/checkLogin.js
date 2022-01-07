const { header } = require("express/lib/request");
const jwt = require("jsonwebtoken");

const checkLogin = (req, res, next) => {
  let cookies = req.headers.cookies ? req.headers.cookies : null;

  if (cookies) {
    try {
      token = cookies;
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      next();
    } catch (err) {
      res.status(500).json({
        error: "Authentication failure",
      });
    }
  } else {
    res.status(401).json({
      error: "Authentication failure!",
    });
  }
};

module.exports = checkLogin;
