const express = require('express');


const repairsMiddlewares = require('../MIDDLEWARES/repairs.middlewares');
const repairsController = require('../CONTROLLER/repairs.controller');
const validMiddlewares = require('../MIDDLEWARES/validations.middlewares')
const authMiddlewares = require('../MIDDLEWARES/auth.middlewares')


const router = express.Router();

router.use(authMiddlewares.protect)

router
  .route('/')
  .get(authMiddlewares.restrictTo('employee'),repairsController.readlAllRepairs)
  .post(validMiddlewares.repairsUser, repairsController.createRepair);

router.use(authMiddlewares.restrictTo('employee'))

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
