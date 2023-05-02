const authController = require('../controller/auth.controller');
 const validationMiddlewares = require('../middlewares/validations.middlewares');

const express = require('express');


const router = express.Router();

router.post('/login', validationMiddlewares.userValidation,authController.login)
router.post('/signup',validationMiddlewares.createUserValidation,authController.singup)

module.exports = router