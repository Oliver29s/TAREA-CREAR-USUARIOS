const express = require('express');
const router = express.Router();

const repairsMiddlewares = require('../MIDDLEWARES/repairs.middlewares');
const repairsController = require('../CONTROLLER/repairs.controller');

router
  .route('/')
  .get(repairsController.readlAllRepairs)
  .post(repairsMiddlewares.validDate, repairsController.createRepair);

router
  .route('/:id')
  .get(
    repairsMiddlewares.validExistRepair,
    repairsController.findOneRepair
  )
  .patch(
    repairsMiddlewares.validExistRepair,
    repairsController.updateRepair
  )
  .delete(
    repairsMiddlewares.validExistRepair,
    repairsController.deleteRepair
  );

module.exports = router;
