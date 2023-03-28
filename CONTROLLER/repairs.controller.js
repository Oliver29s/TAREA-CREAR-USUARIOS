const UserRepairs = require('../models/repairs.model');

exports.readlAllUser = async (req, res) => {
  const user = await UserRepairs.findAll({
    where: {
      status: 'pending',
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
    const { date, userId } = req.body;

    const user = await UserRepairs.create({ date, userId });

    res.status(201).json({
      user,
      status: true,
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: 'fail ',
    });
  }
};

exports.updateUsers = async (req, res) => {
  try {
    const { user } = req.params;
    await user.update({
      id,
      date,
      status: status,
      userId: userId,
    });
    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: 'producto no encontrado',
      });
    }
    res.status(200).json({
      status:'completes',
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
    const { id } = req.params;
    const user = await UserRepairs.delete({
      where: {
        id,
        status: 'pending',
      },
    });
    if (!user) {
      return res.status(200).json({
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
    const user = await UserRepairs.findOne({
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

    res.status(200).json({
      status: 'pending',
      user,
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: 'fail ',
    });
  }
};
