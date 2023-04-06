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

  
  exports.validExistRepair = async (req,res,next) =>{
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
    req.repair = repair
    next();
  }  
 