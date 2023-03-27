const express = require("express");
const router = express.Router();
const usersController = require("../CONTROLLER/users.controller");
const usersMiddlewares = require('../MIDDLEWARES/users.middlewares')

router
  .route("/")
  .get(usersController.readlAllUser)
  .post(usersMiddlewares.validUsers,usersController.createUser);

router
  .route("/:id")
  .get(usersController.findOneUsers)
  .patch(usersMiddlewares.updateUsers,usersController.updateUsers)
  .delete(usersController.deleteUsers);

module.exports = router;
