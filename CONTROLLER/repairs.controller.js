const UserRepairs = require('../models/repairs.model');
const catchAsync = require('../utils/catchAsync');

exports.readlAllRepairs = catchAsync( async (req, res) => {
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
});

exports.createRepair = catchAsync( async (req, res) => {
  const { date, userId,description,motorsNumber } = req.body;

  const repair = await UserRepairs.create({ date, userId,description,motorsNumber });

  res.status(201).json({
    status: 'pending',
    message: 'The product has been created',
    repair,
  });
});

exports.updateRepair = catchAsync( async (req, res) => {
  const { repair } = req;
  await repair.update({ status: 'completed' });

  res.status(200).json({
    status: 'completed',
    message: 'update exit',
  });
});

exports.deleteRepair = catchAsync( async (req, res) => {
  const { repair } = req;
  await repair.update({ status: 'cancelled' });

  res.status(200).json({
    status: 'succes',
    message: 'The repasir has ben cancelled',
  });
});

exports.findOneRepair = catchAsync(  async (req, res) => {
  const { repair } = req;

  res.status(200).json({
    status: 'pending',
    repair,
  });
});
