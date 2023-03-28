const User = require('../models/user.model');

exports.readlAllUser = async (req, res) => {
  const user = await User.findAll({
    where: {
      status: true,
    },
  });
  res.status(200).json({
    status: 'succes',
    message: 'The query has been done successfully',
    user,
  });
};

exports.createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.create({ name, email, password });

    res.status(201).json({
      user,
      status: true,
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: 'existing user',
    });
  }
};

exports.updateUsers = async (req, res) => {
  try {
    const { user } = req;
    await User.update({
      name,
      email,
      password,
      role,
      status
    });
    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: 'producto no encontrado',
      });
    }
    res.status(200).json({
      status: 'completes',
      message: 'update exit',
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: 'fail ',
    });
  }
};

exports.deleteUsers = async (req, res) => {
  try {
    const { user } = req
      await User.delete({
      where: {
        id,
        status: 'pending',
      },
    });
    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: 'user is not define',
      });
    }
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: 'fail ',
    });
  }
};

exports.findOneUsers = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where: {
        id,
        status: true,
      },
    });
    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: 'user is not define',
      });
    }

    res.status(200).json({
      status: 'succes',
      user,
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: 'fail ',
    });
  }
};
