const express = require('express');


const repairsMiddlewares = require('../middlewares/repairs.middlewares');
const repairsController = require('../controller/repairs.controller');
const validMiddlewares = require('../middlewares/validations.middlewares')
const authMiddlewares = require('../middlewares/auth.middlewares')


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
