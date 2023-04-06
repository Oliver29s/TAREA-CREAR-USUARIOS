const User = require('../models/user.model');

exports.readlAllUser = async (req, res) => {
  try {
    const user = await User.findAll({
      where: {
        status: 'available',
      },
    });
    res.status(200).json({
      status: 'success',
      message: 'The query has been done successfully',
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong',
      error,
    });
  }
};

exports.createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.create({ name, email, password });

    res.status(201).json({
      status: 'succes',
      message: 'User created Exit',
      user,
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: 'user not create',
    });
  }
};

exports.updateUsers = async (req, res) => {
  try {
    const { user } = req.user
    const { name, email, password } = req.body;
    await user.update({
      name,
      email,
      password,
    });

    res.status(200).json({
      status: 'success',
      message: 'update user exit',
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong',
    });
  }
};

exports.deleteUsers = async (req, res) => {
  try {
    const { user } = req;

    await user.update({ status: 'disabled' });

    res.status(200).json({
      status: 'succes',
      message: 'The user has ben deleted',
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: 'user is not found ',
    });
  }
};

exports.findOneUsers = async (req, res) => {
  try {
    const user = req.user;

    res.status(200).json({
      status: 'succes',
      user,
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: 'User not fond ',
      
    });
  }
};
