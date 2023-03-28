const User = require('../models/user.model');

exports.validUsers = (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name) {
    return res.status(400).json({
      status: 'error',
      message: 'the name is required',
    });
  }
  if (!email) {
    return res.status(400).json({
      status: 'error',
      message: 'the  email is required',
    });
  }
  if (!password) {
    return res.status(400).json({
      status: 'error',
      message: 'the  password is required',
    });
  }
  next();
};

exports.updateUsers = async (req, res, next) => {
  const {id} = req.params
  const { name, email } = req.body;
  const users = await User.findOne({
    where: {
      id,
      status: true,
    },
  });

  
  if (!name) {
    return res.status(400).json({
      status: 'error',
      message: 'the name is required',
    });
  }
  if (!email) {
    return res.status(400).json({
      status: 'error',
      message: 'the email is required',
    });
  }
  req.users = users
  next();
};
