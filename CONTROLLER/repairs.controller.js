const UserRepairs = require('../models/repairs.model');

exports.readlAllUser = async (req, res) => {
  const repair = await UserRepairs.findAll({
    where: {
      status: 'pending',
    },
  });
  res.status(200).json({
    status: 'succes',
    message: 'The query has been done successfully',
    repair,
  });
};

exports.createUser = async (req, res) => {
  const { date, userId } = req.body;

  const repair = await UserRepairs.create({ date, userId });

  res.status(201).json({
    status: 'pending',
    message: 'The product has been created',
    repair,
  });
};

exports.updateUsers = async (req, res) => {
  const { repair } = req;
  await repair.update({status: 'completed',});

  res.status(200).json({
    status: 'completed',
    message: 'update exit',
  });
};

exports.deleteUsers = async (req, res) => {
  const { repair } = req;
  await repair.update({ status: 'cancelled' });

  res.status(200).json({
    status: 'succes',
    message: 'The repasir has ben cancelled',
  });
};

exports.findOneUsers = async (req, res) => {
  try {
    const { repair } = req;

    res.status(200).json({
      status: 'pending',
      repair,
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: 'inter server error ',
    });
  }
};
