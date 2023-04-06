const express = require("express");

const usersController = require("../CONTROLLER/users.controller");
const usersMiddlewares = require('../MIDDLEWARES/users.middlewares')
const router = express.Router();

router
  .route("/")
  .get(usersController.readlAllUser)
  .post(usersMiddlewares.validUsers,usersController.createUser);

router
  .route("/:id")
  .get(usersMiddlewares.validExistUser,usersController.findOneUsers)
  .patch(usersMiddlewares.validUsers,usersMiddlewares.validExistUser,usersController.updateUsers)
  .delete(usersMiddlewares.validExistUser,usersController.deleteUsers);

module.exports = router;
