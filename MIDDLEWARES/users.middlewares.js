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

exports.updateUsers = (req, res, next) => {
  const { name, email } = req.body;
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

  next();
};
