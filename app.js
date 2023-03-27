const express = require("express");
const morgan = require("morgan");
const usersRoutes = require("./ROUTES/users.routes");
const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date();
  next();
});

app.use("/api/v1/users", usersRoutes);
module.exports = app;
