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
  const users = await Product.findOne({
    where: {
      id,
      status: true,
    },
  });
  if (!users) {
    return res.status(404).json({
      status: 'error',
      message: 'the users not found',
    });
  }
  
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
