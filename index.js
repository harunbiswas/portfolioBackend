// External Imports
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// Internal Imports
const {
  notFoundHandler,
  errorHandler,
} = require("./middlewares/common/errorHandler");
const homeRouter = require("./router/homeRouter");
const dashboardRouter = require("./router/dashboardRouter");
const serviceRouter = require("./router/serviceRouter");
const reviewRouter = require("./router/reviewRouter");
const resomeRouter = require("./router/resomeRouter");

// Initialize Express
const app = express();
dotenv.config();

app.use(cors());

// Database connection
mongoose
  .connect(process.env.MONGOO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Cunnection successfully!"))
  .catch((err) => console.log(err));

// Requsest Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set static folder
app.use(express.static(path.join(__dirname, "public")));

// parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

// Routing setup
app.use("/", homeRouter);
app.use("/dashboard", dashboardRouter);
app.use("/dashboard/service", serviceRouter);
app.use("/dashboard/review", reviewRouter);
app.use("/dashboard/resome", resomeRouter);

//404(Not found) Error handler
app.use(notFoundHandler);

//common error handler
app.use(errorHandler);

// listen the app
app.listen(process.env.PORT || 4000, () => {
  console.log(`App Listening to port ${process.env.PORT || 4000}`);
});
