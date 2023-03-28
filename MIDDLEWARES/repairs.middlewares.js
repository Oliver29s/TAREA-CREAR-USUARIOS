const UserRepairs = require("../models/repairs.model");


exports.validDate = (req, res, next) => {
    const { date, userId } = req.body;
    if (!date) {
      return res.status(400).json({
        status: 'error',
        message: 'the date is required',
      });
    }
    if (!userId) {
      return res.status(400).json({
        status: 'error',
        message: 'the  userId is required',
      });
    }
   
    next();
  };

  
  exports.validExistProduct = async (req,res,next) =>{
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
        message: 'producto no encontrado',
      });
    }
    req.user = user
    next();
  }  
 