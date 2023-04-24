const express = require('express');

const usersController = require('../CONTROLLER/users.controller');
const usersMiddlewares = require('../MIDDLEWARES/users.middlewares');
const validationMiddlewares = require('../MIDDLEWARES/validations.middlewares');
const authMiddlewares = require('../MIDDLEWARES/auth.middlewares')
const router = express.Router();

router.use(authMiddlewares.protect)

router.route('/').get(usersController.readlAllUser);

router
  .route('/:id')
  .get(usersMiddlewares.validExistUser,authMiddlewares.protectAccountOwner, usersController.findOneUsers)
  .patch(
    validationMiddlewares.userValidation,
    usersMiddlewares.validExistUser,
    usersController.updateUsers
  )
  .delete(
    usersMiddlewares.validExistUser,authMiddlewares.protectAccountOwner,
    usersController.deleteUsers
  );

module.exports = router;
