const Repairs = require('../models/repairs.model');
const User = require('../models/user.model');
const catchAsync = require('../utils/catchAsync');

exports.readlAllUser = catchAsync(async (req, res) => {
  const user = await User.findAll({
    where: {
      status: 'available',
    },
    attributes: ['id','name','role'],
    include: [
      {
        model: Repairs
      },
    ],
  });
  res.status(200).json({
    status: 'success',
    message: 'The query has bee done successfully',
    user,
  });
});

exports.updateUsers = catchAsync(async (req, res) => {
  const { user } = req ;
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
});

exports.deleteUsers = catchAsync(async (req, res) => {
  const { user } = req;

  await user.update({ status: 'disabled' });

  res.status(200).json({
    status: 'succes',
    message: 'The user has ben deleted',
  });
});

exports.findOneUsers = catchAsync(async (req, res) => {
  const user = req.user;

  res.status(200).json({
    status: 'succes',
    user,
  });
});
