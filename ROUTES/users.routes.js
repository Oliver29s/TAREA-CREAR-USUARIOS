const express = require('express');

const usersController = require('../controller/users.controller');
const usersMiddlewares = require('../middlewares/users.middlewares');
const validationMiddlewares = require('../middlewares/validations.middlewares');
const authMiddlewares = require('../middlewares/auth.middlewares')
const router = express.Router();

router.use(authMiddlewares.protect)

router.route('/').get(usersController.readlAllUser);

router
  .route('/:id')
  .get(usersMiddlewares.validExistUser,authMiddlewares.protectAccountOwner, usersController.findOneUsers)
  .patch(
    validationMiddlewares.userValidation,
    usersMiddlewares.validExistUser,
    authMiddlewares.protectAccountOwner,
    usersController.updateUsers
  )
  .delete(
    usersMiddlewares.validExistUser,authMiddlewares.protectAccountOwner,
    usersController.deleteUsers
  );

module.exports = router;
