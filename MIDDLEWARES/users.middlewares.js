const User = require('../models/user.model');

exports.validExistUser = async (req, res, next) => {
  try {
    const {id} = req.params
    const user = await User.findOne({
      where: {
        id,
        status: 'available',
      },
    });
  
    
    if (!user) {
      return res.status(400).json({
        status: 'error',
        message: `Product whith id: ${id} not found`,
      });
    }
    
    req.user = user
    next();
    
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong',
      error,})
    
  }
 
};
