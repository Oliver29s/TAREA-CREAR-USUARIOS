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
  .get(
    repairsMiddlewares.validExistRepair,
    repairsController.findOneUsers
  )
  .patch(
    repairsMiddlewares.validExistRepair,
    repairsController.updateUsers
  )
  .delete(
    repairsMiddlewares.validExistRepair,
    repairsController.deleteUsers
  );

module.exports = router;
