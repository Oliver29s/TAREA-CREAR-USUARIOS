const UserRepairs = require('../models/repairs.model');

exports.validExistRepair = async (req, res, next) => {
  const { id } = req.params;
  const repair = await UserRepairs.findOne({
    where: {
      id,
      status: 'pending',
    },
  });

  if (!repair) {
    return res.status(404).json({
      status: 'error',
      message: 'Repair not found',
    });
  }
  req.repair = repair;
  next();
};

exports.pendingValid = async (req, res, next) => {
  const pending = await UserRepairs.findOne({
    where: {
      status: 'pending',
    },
  });

  if (!pending) {
    return res.status(404).json({
      status: 'fail',
      message:
        'Repair not found,check if it is completed or canceled',
    });
  }
};
