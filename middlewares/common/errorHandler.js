// external imports
const createError = require("http-errors");

// 404 not found handler

function notFoundHandler(req, res, next) {
  next(createError(404, "Your requested conten was not found!"));
}

// default Error handler
function errorHandler(err, req, res, next) {
  (res.locals.error =
    process.env.NODE_ENV === "developement" ? err : { message: err.message }),
    console.log(err);
  res.json(err);
}

module.exports = {
  notFoundHandler,
  errorHandler,
};
