const express = require('express');
const router = express.Router();

const repairsMiddlewares = require('../MIDDLEWARES/repairs.middlewares');
const repairsController = require('../CONTROLLER/repairs.controller');

router
  .route('/')
  .get(repairsController.readlAllUser)
  .post(repairsMiddlewares.validDate, repairsController.createUser);

router
  .route('/:id')
  .get(repairsController.findOneUsers)
  .patch(
    repairsMiddlewares.validExistProduct,
    repairsController.updateUsers
  )
  .delete(repairsController.deleteUsers);


  module.exports = router