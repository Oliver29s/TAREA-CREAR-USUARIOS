const express = require("express");
const morgan = require("morgan");

const usersRoutes = require("./ROUTES/users.routes");
const repairsRoutes = require('./ROUTES/repairs.routes')
const app = express();

app.use(morgan("dev"));
app.use(express.json());



app.use("/api/v1/users", usersRoutes);
app.use("/api/v1/repairs",repairsRoutes)
module.exports = app;
